/**
 * Spelling Bee Solver Logic
 * whataboutjohn.com
 */

async function solveBee() {
    const centerInput = document.getElementById('center');
    const allInput = document.getElementById('all');
    const list = document.getElementById('results');

    const center = centerInput.value.toLowerCase().trim();
    const all = allInput.value.toLowerCase().trim();

    // Basic Validation
    if (center.length !== 1 || all.length !== 7) {
        alert("Please enter 1 center letter and all 7 total letters.");
        return;
    }

    list.innerHTML = "<li>Searching...</li>";

    try {
        // Fetch from your PHP bridge
        const response = await fetch(`get_words.php?center=${center}&all=${all}`);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const words = await response.json();

        if (words.length === 0) {
            list.innerHTML = "<li>No words found.</li>";
            return;
        }

// Render results
        list.innerHTML = words.map(word => {
            const isPangram = new Set(word.split('')).size >= 7;
            return `<li class="${isPangram ? 'pangram' : ''}">
                        ${word}${isPangram ? ' 🏆' : ''}
                    </li>`;
        }).join('');

        // Remove old copy link if it exists so they don't stack up
        const oldLink = document.getElementById('copy-link');
        if (oldLink) oldLink.remove();

        if (words.length > 0) {
            list.insertAdjacentHTML('beforebegin', 
                `<p id="copy-link" style="text-align:right; font-size:0.8rem; margin: 5px 0;">
                    <a href="#" onclick="copyWords(); return false;" style="color: #666; text-decoration: none;">📋 Copy List</a>
                 </p>`
            );
        }

    } catch (err) {
        console.error("Fetch error:", err);
        list.innerHTML = "<li>Error connecting to database.</li>";
    }
}

// Optional: Allow pressing "Enter" to submit
document.addEventListener('DOMContentLoaded', () => {
    const inputs = [document.getElementById('center'), document.getElementById('all')];
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') solveBee();
        });
    });
});
/**
 * Resets the input fields and clears the result list
 */
function clearForm() {
    document.getElementById('center').value = '';
    document.getElementById('all').value = '';
    document.getElementById('results').innerHTML = '';
    
    // Add this line to remove the link when clearing
    const oldLink = document.getElementById('copy-link');
    if (oldLink) oldLink.remove();

    document.getElementById('center').focus();
}

/**
 * Copies all found words to the clipboard as a plain list
 */
function copyWords() {
    const listItems = document.querySelectorAll('#results li');
    if (listItems.length === 0) return;

    // Join words with a newline, removing the 🏆 emoji if present
    const textToCopy = Array.from(listItems)
        .map(li => li.innerText.replace(' 🏆', ''))
        .join('\n');

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Word list copied to clipboard!");
    });
}
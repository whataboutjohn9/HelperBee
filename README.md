# 🐝 Helper Bee: Spelling Bee Assistant

**Helper Bee** is a high-performance, full-stack word engine designed to assist with the New York Times Spelling Bee puzzle. It helps users find those final few words to reach "Genius" level, while also identifying the high-scoring **Pangrams**.

Live Demo: [whataboutjohn.com/helperbee.html](https://whataboutjohn.com/helperbee.html)

## ✨ Features

* **Intuitive UI:** Clean, "honeycomb-yellow" design inspired by the NYT game.
* **Two-Column Results:** Uses CSS `column-count` for easy browsing of large word lists.
* **Pangram Highlighting:** Instantly identifies words that use all 7 unique letters with a 🏆 trophy and custom styling.
* **Fast & Secure:** PHP PDO backend ensures rapid queries and safe database interactions.
* **Broad Vocabulary:** Queries the comprehensive `dwyl/english-words` dataset (~370k words).
* **Adheres to NYT Rules:** Automatically filters for words >= 4 letters and ensures the 'Center Letter' is included.

---
## 📚 Data Attribution
The word list used in this project is powered by the [dwyl/english-words](https://github.com/dwyl/english-words) repository.

* **Source:** `words_alpha.txt`
* **Word Count:** Over 370,000 English words.
* **License:** This dataset is distributed under the MIT License.
* **Processing:** The raw text file was parsed and imported into the `words_all` MySQL table to allow for high-speed REGEXP querying.

## 🏗️ Technical Stack

### **Frontend (HTML5, CSS3, JS)**

The UI is a single-page application (`bee-page`) using:

* **CSS Variables:** Centralized theme management for easy updates to colors and spacing.
* **Async JavaScript:** The `solveBee()` function handles the fetch lifecycle, including validation, loading states, and dynamic result rendering.
* **UX Flourishes:** Supports the "Enter" key for submission and a "Copy List" feature for easy sharing.

### **Backend (PHP & MySQL)**

* **Secure API:** A PHP bridge (`get_words.php`) that connects the browser to the database.
* **Stored Procedures:**
* `GetSpellingBee`: The main solver using REGEXP to enforce game rules.
* `GetPangrams`: A specialized check for words containing all 7 distinct letters.
* **REGEXP:** Heavy lifting is done in the database engine rather than filtering in js.

---

## 📁 Repository Structure

```text
├── helperbee.html      # Main interface and user instructions
├── helperbee.css       # Custom variable-based styling
├── bee-solver.js       # Asynchronous logic & DOM manipulation
├── get_words.php       # Secure API gateway
├── config.example.php  # Template for database credentials
└── sql/
    ├── table_schema.sql # Definition for the words_all table
    └── procedures.sql   # SQL code for GetSpellingBee & GetPangrams

```

---

## ⚙️ Setup & Installation

**Prerequequisites**
* PHP: 7.4+
* MySQL: 5.7+ (required for the REGEXP syntax used)
* Web Server: Apache/Nginx or local (XAMPP/MAMP)

1. **Clone the Repo:**
```bash
git clone https://github.com/whataboutjohn9/HelperBee.git

```


2. **Database Configuration:**
* Import the `words_alpha` dataset into a table named `words_all`.
* Run the scripts in the `/sql` folder to initialize your procedures.


3. **PHP Environment:**
* Rename `config.example.php` to `config.php`.
* Update the file with your local or production database credentials.


4. **Launch:** Point your local server to `helperbee.html` and start solving!

---

## 🤝 Contributing

I advocate for responsible use! If you have ideas for improving the search regex or adding a "Hint" mode (showing just the first two letters), feel free to open a Pull Request.

---


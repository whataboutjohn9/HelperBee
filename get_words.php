<?php
header('Content-Type: application/json');
// Restrict access only to your domain for better security
header("Access-Control-Allow-Origin: https://whataboutjohn.com"); 

$config = require __DIR__ . 'xxx.php';

// Access the array keys
$host = $config['DB_HOST'];
$db   = $config['DB_NAME'];
$user = $config['DB_USER'];
$pass = $config['DB_PASS'];

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    
    $center = $_GET['center'] ?? '';
    $all    = $_GET['all'] ?? '';

    if (strlen($center) !== 1 || strlen($all) !== 7) {
        echo json_encode(['error' => 'Invalid input']);
        exit;
    }

    $stmt = $pdo->prepare("CALL GetSpellingBee(?, ?)");
    $stmt->execute([$center, $all]);
    
    $results = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo json_encode($results);

} catch (PDOException $e) {
    // Log actual error to server but show generic message to user
    error_log($e->getMessage()); 
    echo json_encode(['error' => 'Database connection failed.']);
}
?>
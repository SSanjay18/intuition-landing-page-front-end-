<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "university_form";


$conn = new mysql($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$stmt = $conn->prepare("INSERT INTO contact_form (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);


if ($stmt->execute()) {
    echo "Thank you for contacting us!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>

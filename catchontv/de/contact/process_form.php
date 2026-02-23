<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'support@catchontvapp.com'; // Enter your email address here
    $subject = 'New Contact Form Catchon TV';
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo 'Thank you for your message. We will contact you shortly.';
    } else {
        echo 'Oops! Something went wrong. Please try again later. ';
    }
}
?>


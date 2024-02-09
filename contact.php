<?php

if($_SERVER["REQUEST_METHOD"] == "POST") {
    //collect form data
    $full_name = $_POST['full_name'];
    $email = $_POST['email'];
    $mobile_number = $_POST['mobile_number'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Set up the recipient email address

    $to = 'viktoras.kondrotas@gmail.com';

    // Set up the email subject

    $email_subject = "New Contact Form Submission: $subject";

    // Compose the email message

    $email_body = "You have received a new message from your website contact form.\n\n";
    $email_body .= "Full Name: $full_name\n";
    $email_body .= "Email Address: $email\n";
    $email_body .= "Mobile Number: $mobile_number\n";
    $email_body .= "Message:\n$message";

    // Set up headers 

    $headers = "From: $email\n";
    $headers .= "Reply-To: $email\n";

    
try {
    // Send the email 

    if(mail($to, $email_subject, $email_body, $headers)) {
        // Email sent successfully 
        header("Location: index.html");
        exit;
    }else {
        // Email sending failed 
        throw new Exception("Failed to send email.");
    }

} catch (Exception $e) {
    // Error handling
    echo "An error occurred: " . $e->getMessage();
} 
}else {
    // If the request method is not POST, redirect to the contact page 
    header("Location: index.html");
    exit;
}

?>
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

/* Exception class. */
require 'Exception.php';

/* The main PHPMailer class. */
require 'PHPMailer.php';

/* SMTP. */
require 'SMTP.php';

$_POST['email'];
$_POST['name'];
$_POST['comments'];

/* Create a new PHPMailer object. Passing TRUE to the constructor enables exceptions. */
$mail = new PHPMailer(TRUE);

/* Open the try/catch block. */
try {
   /* Sender. */
   $mail->setFrom('donotreply@mattjlowe.com', 'MattJLowe.com');

   /* Recipient. */
   $mail->addAddress("matthewjlowe@gmail.com", "Matthew Lowe");

   /* Subject. */
   $mail->Subject = 'MattJLowe | Contact';

   /* Message body. */
   $mail->Body = "New Email from MattJLowe.com
   Name : $name | Email : $email
   Comments : $comments
   ";

   /*send the mail. */
   $mail->send();
}
catch (Exception $e)
{
   /* PHPMailer exception. */
   echo $e->errorMessage();
}
catch (\Exception $e)
{
   /* PHP exception (note the backslash to select the global namespace Exception class). */
   echo $e->getMessage();
}
?>
<?php

$name = $_POST['name'];
$email = $_POST['email'];  
$asunto = $_POST['subject'];  
$message = $_POST['message'];

$header = 'From: ' . $email . "\r\n";
$header .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . "\r\n";
$message .= "Su E-mail es: " . $email . "\r\n";
$message .= "Mensaje: " . $message . "\r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$to = 'axelyataco1998@gmail.com';
$subject = 'Asunto del correo: ' . $asunto . "\r\n";

mail($to, $subject, utf8_decode($message),$header);
header("Location:index.html");
?>

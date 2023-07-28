<?php
$nameQuestions = htmlspecialchars($_POST['nameQuestions']);
$emailQuestions = htmlspecialchars($_POST['emailQuestions']);
$requestQuestions = htmlspecialchars($_POST['requestQuestions']);

//

//ОТПРАВКА 


$subject = "Questions";

$headers = "From: 
Questions\r\n \r\n 
Site: T ZEEZ TJE \r\n \r\n
 
Name: $nameQuestions \r\n 
Email: $emailQuestions\r\n 

 
Questions:\r\n \r\n 
$requestQuestions\r\n \r\n \r\n";


if (mail(
  "ychoba.boec92.92@yandex.ru",
  $subject,
  $headers

))
  echo "Sent"/*Сообщение отправлено*/;
else
  echo "Not Sent!"/*Сообщение не отправлено*/;

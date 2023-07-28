<?php
$nameReserv = htmlspecialchars($_POST['nameReserv']);
$surnameReserv = htmlspecialchars($_POST['surnameReserv']);
$phoneReserv = htmlspecialchars($_POST['phoneReserv']);
$personsReserv = htmlspecialchars($_POST['personsReserv']);
$commentReserv = htmlspecialchars($_POST['commentReserv']);
//

//ОТПРАВКА 


$subject = "Table reservation";

$headers = "From: 
Table reservation\r\n \r\n 
Site: T ZEEZ TJE \r\n \r\n
 
Name: $nameReserv \r\n 
Surname: $surnameReserv\r\n 
Phones: $phoneReserv\r\n 
Persons: $personsReserv\r\n
 
Comments:\r\n \r\n 
$commentReserv\r\n \r\n \r\n";


if (mail(
  "ychoba.boec92.92@yandex.ru",
  $subject,
  $headers

))
  echo "<text style='color: rgb(0, 255, 30);'>Sent</text>"/*Сообщение отправлено*/;
else
  echo "Not Sent!"/*Сообщение не отправлено*/;

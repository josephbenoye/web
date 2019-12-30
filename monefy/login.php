<?php

$dbuser = 'schooler';
$dbpass = '30573057';
$dbhost = 'localhost';
$base = 'monefy';
$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$base);

$username = $_POST['username'];
$password = $_POST['password'];

echo $username;
$query = "select password from LOGIN where username = '$username'";

$ret = mysqli_query($conn,$query);

$result = mysqli_fetch_array($ret);

if($result[0]==$password)
{
	echo " Successfull Login";
}
else
{
	echo " Wrong username or password";
}



mysqli_close($conn);
?>

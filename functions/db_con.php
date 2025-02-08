<?php
// Database connection settings
$host = 'localhost'; 
$dbname = 'devfnx'; 
$user = 'root'; 
$password = ''; 
$con = new mysqli();
if (getenv("MYSQL_HOST")) {
	$host = getenv("MYSQL_HOST");
	$password = getenv("MYSQL_PASSWORD");
	$user = getenv("MYSQL_USER");
	$con = mysqli_connect($host, $user, $password, "meservers") or die(json_encode(mysqli_error($con)));
} else {
	$con = mysqli_connect("10.50.9.11", "meservers", "meservers", "meservers") or die(json_encode(mysqli_error($con)));
}
$_POST = json_decode(file_get_contents('php://input'), true);
?>
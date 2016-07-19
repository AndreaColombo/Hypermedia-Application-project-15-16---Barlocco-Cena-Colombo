<?php
$servername = "localhost";
$username = "youcall";
$password = "nicobergamasco";

if (!$conn = mysql_connect($servername, $username, $password)) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('my_youcall', $conn)) {
    echo 'Could not select database';
    exit;
}

$sql    = 'SELECT id,brand,model,image FROM Device WHERE category="smartphone"';
$result = mysql_query($sql,$conn);

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

$x=0;
$arr= array();
while (($row = mysql_fetch_assoc($result)) && $x<6) {
	array_push($arr,$row);
	$x++;
}
$sql    = 'SELECT id,image_promotion FROM Device WHERE image_promotion is not null UNION SELECT id,image_promotion FROM Smart_life WHERE image_promotion is not null';
$result = mysql_query($sql,$conn);

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}
$x=0;
while (($row = mysql_fetch_assoc($result)) && $x<4){
	array_push($arr,$row);
	$x++;
}
echo json_encode($arr);
mysql_free_result($result);

?>
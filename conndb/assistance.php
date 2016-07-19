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

$sql    = 'SELECT id,name FROM Assistance WHERE highlight ="1"';
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


echo json_encode($arr);
mysql_free_result($result);

?>
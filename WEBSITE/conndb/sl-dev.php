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
$id=mysql_real_escape_string($_GET['id']);
$sql='SELECT id,brand,model FROM Device join compatible_sl_device on id=iddevice WHERE idsl='.$id;
$result = mysql_query($sql,$conn);

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

$arr= array();
while ($row = mysql_fetch_assoc($result)){
	array_push($arr,$row);
}
echo json_encode($arr);
mysql_free_result($result);
?>
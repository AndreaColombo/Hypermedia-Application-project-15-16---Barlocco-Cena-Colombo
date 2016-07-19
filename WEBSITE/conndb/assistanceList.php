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

$category=mysql_real_escape_string($_GET['category']);
$sql='SELECT id,subcategory,subsubcategory,name FROM Assistance WHERE category="'.$category.'"';
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
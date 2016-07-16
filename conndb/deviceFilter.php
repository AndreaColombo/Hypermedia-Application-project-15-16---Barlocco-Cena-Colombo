<?php
$servername = "localhost";
$username = "youcall";
$password = "nicogay";

if (!$conn = mysql_connect($servername, $username, $password)) {
    echo 'Could not connect to mysql';
    exit;
}

if (!mysql_select_db('my_youcall', $conn)) {
    echo 'Could not select database';
    exit;
}

$category=mysql_real_escape_string($_GET['category']);
$filter=mysql_real_escape_string($_GET['filter']);
$mode=mysql_real_escape_string($_GET['mode']);
if($mode=="3"){
	$sql    = 'SELECT image,brand,model,price FROM Device WHERE category="'.$category.'"';
	if($filter!="all"){
		$sql   = 'SELECT image,brand,model,price FROM Device WHERE category="'.$category.'" AND subcategory="'.$filter.'"';
	}
}
if($mode=="2"){
	$sql    = 'SELECT DISTINCT(subcategory) FROM Device WHERE category="'.$category.'"';
}
if($mode=="1"){
	$sql    = 'SELECT DISTINCT(brand) FROM Device WHERE category="'.$category.'"';
}
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
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
$category=$_GET['category'];
$filterCat= array();
$filterBra= array();
$x=0;
while($_GET['filterCat'.$x]!=null){
	array_push($filterCat,$_GET['filterCat'.$x]);
	$x++;
}
$x=0;
while($_GET['filterBra'.$x]!=null){
	array_push($filterBra,$_GET['filterBra'.$x]);
	$x++;
}
$sql   = 'SELECT image,brand,model,price FROM Device WHERE category="'.$category.'"';
if($filterCat[0]!='all'){
	for($i=0;$i<count($filterCat);$i++){
		if($i==0)
			$sql .= 'AND (subcategory="'.$filterCat[$i].'"';
		else
			$sql .= 'OR subcategory="'.$filterCat[$i].'"';
	}
	$sql .=')';
}
if($filterBra[0]!='all'){
	for($i=0;$i<count($filterBra);$i++){
		if($i==0)
			$sql .= 'AND (brand="'.$filterBra[$i].'"';
		else
			$sql .= 'OR brand="'.$filterBra[$i].'"';
	}
	$sql .=')';
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
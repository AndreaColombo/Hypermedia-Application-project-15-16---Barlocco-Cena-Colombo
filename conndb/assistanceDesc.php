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
$sql='SET CHARACTER SET utf8';
$result = mysql_query($sql,$conn);
$id=mysql_real_escape_string($_GET['id']);
$sql='SELECT Assistance.category,Assistance.subcategory,Assistance.name,Assistance.description,Faq.question,Faq.answer FROM Assistance left join Faq on Assistance.id=Faq.idassistance WHERE Assistance.id='.$id.'';
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
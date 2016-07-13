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

$sql    = 'SELECT brand,model,image FROM Device WHERE category="smartphone"';
$result = mysql_query($sql,$conn);

if (!$result) {
    echo "DB Error, could not query the database\n";
    echo 'MySQL Error: ' . mysql_error();
    exit;
}

$x=1;


while (($row = mysql_fetch_assoc($result)) && $x<7) {
	if($x==1)
		echo "<div class='item active'>";
    if($x==4)
    	echo "<div class='item'>";
    echo "<div class='col-sm-4'>
            <div class='thumbnail'> <img class='img-responsive hidden-xs' src='../".$row['image']."' alt=''><a href='#'></a>
			</div>
            <div class='caption'>
				<h4 class='device-title'>".$row['brand']."</h4>
				<p class='device-subtitle'>".$row['model']."</p> 
			</div>
		  </div>";
	if($x%3==0)
		echo "</div>";
	$x++; 
}
echo "<a data-slide='prev' href='#deviceCarousel' class='carousel-control left'>
				  <span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>
                    <span class='fa fa-chevron-left' aria-hidden='true'></span>
                  </a>
                  <a data-slide='next' href='#deviceCarousel' class='carousel-control right'>
				  <span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>
                    <span class='fa fa-chevron-right' aria-hidden='true'></span>
                  </a>";
mysql_free_result($result);

?>
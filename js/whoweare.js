function change (id){
	alert(id);
	if(id == '1') {
		$("#whoweare").innerHTML = 
			'<h3>Overview</h3>'+
			'<p class = "paragraph"> You call is born in 2016 with the goal of providing new solution in the area of telecoomunications and internet.'+
			'We believe tha research of new technologies will be the key of our success.</p>'+
			'<img   src="../img/tim.jpg" class="img-responsive"/>';
	}
	else if(id == '2') {
		$("#whoweare").innerHTML = 
			"kodio";
	}
	else if(id == '3') {
		$("#whoweare").innerHTML = 
			"kamadonna";
	}
	else if(id == '4') {
		$("#whoweare").innerHTML = 
			"nicogay";
	}
}
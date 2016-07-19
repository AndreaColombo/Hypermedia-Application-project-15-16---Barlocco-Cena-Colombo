$(document).ready(function () {  
	var w = $(window).width();
		if (w < 750) {
			document.getElementById("menu-bar-assistance").innerHTML = 
			'<h3 class = "centered"><a href="assistanceList.html?category=Line management"> Line management</a></h3>'+
			'<h3 class = "centered"><a href="assistanceList.html?category=Monitoring Costs and Payments"> Monitoring costs and payments</a></h3>'+
			'<h3 class = "centered"><a href="assistanceList.html?category=Technical support"> Technical support</a></h3>'+
			'<h3 class = "centered"><a href="assistanceList.html?category=Smart Life"> Smart Life</a></h3>';
		}
	$(window).on("resize", function(){
		var w = $(window).width();
		if (w < 750){
			document.getElementById("menu-bar-assistance").innerHTML = 
			'<h3 class = "centered"><a href="assistanceList.html?category=Line management"> Line management</a></h3>'+
			'<h3 class = "centered"><a href="assistanceList.html?category=Monitoring Costs and Payments"> Monitoring costs and payments</a></h3>'+
			'<h3 class = "centered"><a href="assistanceList.html?category=Technical support"> Technical support</a></h3>'+
			'<h3 class = "centered"><a href="assistanceList.html?category=Smart Life"> Smart Life</a></h3>';
		}
		else if (w >750) {
			document.getElementById("menu-bar-assistance").innerHTML = 
			'<div class ="col-xs-offset-2 col-xs-2">'+
					'<a href="assistanceList.html?category=Line management"><img class = "img-responsive" src = "../img/assistance/line-manage-icon.png"></img>'+
					'<h3 class => Line management</h3></a>'+
				'</div>'+
				
				'<div class = "col-xs-2">'+
					'<a href="assistanceList.html?category=Monitoring Costs and Payments"><img class = "img-responsive"  src = "../img/assistance/cost-icon.png"></img>'+
					'<h3> Monitoring costs and payments</h3></a>'+
				'</div>'+
				
				'<div class = "col-xs-2">'+
					'<a href="assistanceList.html?category=Technical support"><img class = "img-responsive" src = "../img/assistance/tech-support-icon.png"></img>'+
					'<h3> Technical support</h3></a>'+
				'</div>'+
				
				'<div class = "col-xs-2">'+
					'<a href="assistanceList.html?category=Smart Life"><img class = "img-responsive" src = "../img/assistance/smart-life-assistance-icon.jpg"></img>'+
					'<h3 > Smart life </h3></a>'+
				'</div>';
		}
	});
});
$(document).ready(function () {  
	var w = $(window).width();
		if (w < 750) {
			document.getElementById("menu-bar-assistance").innerHTML = 
			'<h3 class = "centered"> Smartphone</h3>'+
			'<h3 class = "centered">Tablet</h3>'+
			'<h3 class = "centered"> Smart Accessories</h3>'+
			'<h3 class = "centered"> Modem & networking</h3>'+
			'<h3 class = "centered"> Device outlet</h3>';
		}
	$(window).on("resize", function(){
		var w = $(window).width();
		if (w < 750){
			document.getElementById("menu-bar-assistance").innerHTML = 
			'<h3 class = "centered"> Smartphone</h3>'+
			'<h3 class = "centered"> Tablet</h3>'+
			'<h3 class = "centered"> Smart Accessories</h3>'+
			'<h3 class = "centered"> Modem & networking</h3>'+
			'<h3 class = "centered"> Device outlet</h3>';
		}
		else if (w >750) {
			document.getElementById("menu-bar-assistance").innerHTML = 
			'<div class ="col-xs-offset-2 col-xs-2">'+
					'<img class = "img-responsive" src = "../img/assistance/line-manage-icon.png"></img>'+
					'<h3 class => Line management</h3>'+
				'</div>'+
				
				'<div class = "col-xs-2">'+
					'<img class = "img-responsive"  src = "../img/assistance/cost-icon.png"></img>'+
					'<h3> Monitoring costs and payments</h3>'+
				'</div>'+
				
				'<div class = "col-xs-2">'+
					'<img class = "img-responsive" src = "../img/assistance/tech-support-icon.png"></img>'+
					'<h3> Technical support</h3>'+
				'</div>'+
				
				'<div class = "col-xs-2">'+
					'<img class = "img-responsive" src = "../img/assistance/smart-life-assistance-icon.jpg"></img>'+
					'<h3 > Smart life </h3>'+
				'</div>';
		}
	});
});
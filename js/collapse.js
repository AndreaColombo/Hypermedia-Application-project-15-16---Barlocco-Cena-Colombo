$(document).ready(function () {  
	var w = $(window).width();
		if (w < 750) {
			document.getElementById("menu-bar").innerHTML = 
			'<a id = "click1"> <h3> Smartphone</h3> </a>'+
			'<a id = "click2"> <h3>Tablet</h3></a>'+
			'<a id = "click3"> <h3> Smart Accessories</h3></a>'+
			'<a id = "click4"> <h3> Modem & networking</h3></a>'+
			'<a id = "click5"> <h3> Device outlet</h3></a>';
		}
	$(window).on("resize", function(){
		var w = $(window).width();
		if (w < 750){
			document.getElementById("menu-bar").innerHTML = 
			'<a id = "click1"> <h3> Smartphone</h3> </a>'+
			'<a id = "click2"> <h3> Tablet</h3></a>'+
			'<a id = "click3"> <h3> Smart Accessories</h3></a>'+
			'<a id = "click4"> <h3> Modem & networking</h3></a>'+
			'<a id = "click5"> <h3> Device outlet</h3></a>';
		}
		else if (w >1000) {
			document.getElementById("menu-bar").innerHTML = 
			'<div class ="col-md-2">'+
				'<a id = "click1">'+
					'<img class = "icon xs-hidden" src = "../img/device/smartphone-icon.jpg" ></img>'+
					'<h3> Smartphone</h3>'+
				'</a>'+
			'</div>'+
			'<div class = "col-md-2">'+
				'<a id = "click2">'+
					'<img class = "icon xs-hidden"  src = "../img/device/tablet-icon.jpg"></img>'+
					'<h3> Tablet</h3>'+
				'</a>'+				
			'</div>'+			
			'<div class = "col-md-2">'+	
				'<a id="click3">'+
					'<img class = "icon xs-hidden" src = "../img/device/smart-icon.jpg"></img>'+
					'<h3> Smart Accessories</h3>'+
				'</a>'+		
			'</div>'+
			'<div class = "col-md-2">'+
				'<a id="click4">'+
					'<img class = "icon xs-hidden" src = "../img/device/router-icon.png"></img>'+
					'<h3 > Modem & Networking </h3>'+
				'</a>'+
			'</div>'+
			'<div class = "col-md-2">'+
				'<a id="click5">'+
					'<img class = "icon xs-hidden" src = "../img/device/sale-tag-icon.jpg"></img>'+
					'<h3> Device outlet</h3>'+
				'</a>'+
			'</div>'
		}
			$("#click1").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section1").offset().top-250}, 1000);
            });
			$("#click2").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section2").offset().top-250}, 1000);
            });
			$("#click3").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section3").offset().top-250}, 1000);
            });
			$("#click4").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section4").offset().top-250}, 1000);
            });
			$("#click5").click(function (){
                $('html, body').animate({
                    scrollTop: $("#section5").offset().top-250}, 1000);
            });		
	});		
	
 });
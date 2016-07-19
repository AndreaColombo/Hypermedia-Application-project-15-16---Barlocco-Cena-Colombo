$(document).ready(function() {
var ajaxRequest;  // The variable that makes Ajax possible!
               
               try {
                  // Opera 8.0+, Firefox, Safari
                  ajaxRequest = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try {
                     ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
                  }catch (e) {
                     try{
                        ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
                     }catch (e){
                        // Something went wrong
                        alert("Your browser broke!");
                        return false;
                     }
                  }
               }
               
               // Create a function that will receive data 
               // sent from the server and will update
               // div section in the same page.
				var x;
				ajaxRequest.onreadystatechange = function(){
					if(ajaxRequest.readyState == 4){
						x=ajaxRequest.responseText;
						x=JSON.parse(x);
						for(i=0;i<3;i++){
							$("#div-smartphone-img"+i).append("<img class='img-responsive' src='" + x[i].image + "' alt=''>");
							$("#devbrandsmartphone"+i).append("<a href='description.html?id="+x[i].id+"'><h4 class='device-title'>"+x[i].brand+"</h4><p class='device-subtitle'>"+x[i].model+"</p></a>");
						}
						$("#div-col-0").prepend("<div class = 'device-page-title'>"+x[3].category+"</div><a href='#'></a>");
						
						for (i++, j = 1; i<7; i++, j++){
							$("#div-col-"+j).prepend("<div class = 'device-page-title'>"+x[i].category+"</div>");
						}
						$("#div-col-0").append("<a href='http://youcall.altervista.org/pages/deviceFilter.html?filter=all&category=smartphone''><div class = 'device-page-subtitle' id = 'smartphone1'>All</div></a>");
						for (i=7, j=1; i<11; i++, j++){
							$("#div-col-0").append("<a href='http://youcall.altervista.org/pages/deviceFilter.html?filter="+x[i].subcategory+"&category=smartphone'><div class = 'device-page-subtitle' id = 'smartphone1'>"+x[i].subcategory+"</div></a>");
						}
						$("#div-col-1").append("<a href='http://youcall.altervista.org/pages/deviceFilter.html?filter=all&category=tablet'><div class = 'device-page-subtitle' id = 'smartphone1'>All</div></a>");
						for (i=11, j=1; i<13; i++, j++){
							$("#div-col-1").append("<a href='http://youcall.altervista.org/pages/deviceFilter.html?filter="+x[i].subcategory+"&category=tablet'><div class = 'device-page-subtitle' id = 'smartphone1'>"+x[i].subcategory+"</div></a>");
						}
						$("#div-col-2").append("<a href='http://youcall.altervista.org/pages/deviceFilter.html?filter=all&category=smart accessories'><div class = 'device-page-subtitle' id = 'smartphone1'>All</div></a>");
						for (i=13, j=1; i<15; i++, j++){
							$("#div-col-2").append("<a href='http://youcall.altervista.org/pages/deviceFilter.html?filter="+x[i].subcategory+"&category=smart accessories'><div class = 'device-page-subtitle' id = 'smartphone1'>"+x[i].subcategory+"</div></a>");
						}
						$("#div-col-3").append("<a href='http://youcall.altervista.org/pages/deviceFilter.html?filter=all&category=modem networking'><div class = 'device-page-subtitle' id = 'smartphone1'>All</div></a>");
						for (i=15, j=1; i<18; i++, j++){
							$("#div-col-3").append("<a href='http://youcall.altervista.org/pages/deviceFilter.html?filter="+x[i].subcategory+"&category=modem networking'><div class = 'device-page-subtitle' id = 'smartphone1'>"+x[i].subcategory+"</div></a>");
						}
						for(j=0, i=18;j<3;j++,i++){
							$("#div-tablet-img"+j).append("<img class='img-responsive' src='" + x[i].image + "' alt=''>");
							$("#devbrandtablet"+j).append("<a href='description.html?id="+x[i].id+"'><h4 class='device-title'>"+x[i].brand+"</h4><p class='device-subtitle'>"+x[i].model+"</p></a>");
						}
						for(j=0, i=21;j<3;j++,i++){
							$("#div-smart-img"+j).append("<img class='img-responsive' src='" + x[i].image + "' alt=''>");
							$("#devbrandsmart"+j).append("<a href='description.html?id="+x[i].id+"'><h4 class='device-title'>"+x[i].brand+"</h4><p class='device-subtitle'>"+x[i].model+"</p></a>");
						}
						for(i=24,j=0;j<3;j++,i++){
							$("#div-router-img"+j).append("<img class='img-responsive' src='" + x[i].image + "' alt=''>");
							$("#devbrandrouter"+j).append("<a href='description.html?id="+x[i].id+"'><h4 class='device-title'>"+x[i].brand+"</h4><p class='device-subtitle'>"+x[i].model+"</p></a>");
						}
					}
				}
               
               // Now get the value from user and pass it to
               // server script.

               ajaxRequest.open("GET", "../conndb/device.php", true);
               ajaxRequest.send(null);
 });
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
						for (i=0; i<x.length; i++){
							$("#promotion").append("<div class = 'col-xs-3'><div class='thumbnail'><img src ='"+ x[i].image +"'></div><div class='caption'><a href='description.html?id="+x[i].id+"'><h4 class='device-title'>"+x[i].brand+"</h4><p class='device-subtitle'>"+x[i].model+"</p></a><del>"+x[i].old_price+"&euro;</del><p>"+x[i].price+"&euro;</p></div></div>");
							
						}
					}
				}
               
               // Now get the value from user and pass it to
               // server script.

               ajaxRequest.open("GET", "http://youcall.altervista.org/conndb/outlet.php", true);
               ajaxRequest.send(null);
 });
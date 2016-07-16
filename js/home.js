$( document ).ready(function() {
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
					 for(i=0;i<6;i++){
						$("#devimg"+i).append("<img class='img-responsive hidden-xs' src='" + x[i].image + "' alt=''><a href='#'></a>");
						$("#devbrand"+i).append("<h4 class='device-title'>"+x[i].brand+"</h4><p class='device-subtitle'>"+x[i].model+"</p>");
					}
					$("#divprom").append("<div class='item active'><img src='"+x[6].image_promotion+"' alt='Chania' width='460' height='345'></div>");
					for(i++;i<x.length;i++)
						$("#divprom").append("<div class='item'><img src='"+x[i].image_promotion+"' alt='Chania' width='460' height='345'></div>");
                  }
               }
               
               // Now get the value from user and pass it to
               // server script.

               ajaxRequest.open("GET", "conndb/home.php", true);
               ajaxRequest.send(null);
 });
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
						for (j=0; j<2;j++){
							for (i=0; i<3; i++){
								if (i==0 && j==1){
									$("#highlight"+j).append("<div> <a href = 'assistanceDesc.html?id="+x[3].id+"' <p class ='assistance-title'>"+x[3].name+"<span class='freccina glyphicon glyphicon-chevron-right' align ='right'></span></p></a></div><hr class ='line-assistance' align ='left'>");
								}
								else 
									$("#highlight"+j).append("<div> <a href = 'assistanceDesc.html?id="+x[i*(j+1)].id+"'> <p class ='assistance-title'>"+x[i*(j+1)].name+"<span class='freccina glyphicon glyphicon-chevron-right' align ='right'></span></p></a></div><hr class ='line-assistance' align ='left'>");
							}
						}
					}
				}
               
               // Now get the value from user and pass it to
               // server script.

               ajaxRequest.open("GET", "../conndb/assistance.php", true);
               ajaxRequest.send(null);
 });
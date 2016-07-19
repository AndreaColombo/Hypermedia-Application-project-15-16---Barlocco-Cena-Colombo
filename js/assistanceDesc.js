function openTab(evt, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(tab).style.display = "block";
    evt.currentTarget.className += " active";
}
var id;
$( document ).ready(function() {
	id=getParameterByName("id");
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
                     x= ajaxRequest.responseText;
					 x=JSON.parse(x);
					 var i;
					 $("#prev-page").append("<meta itemprop='name' content = 'Home'><meta itemprop='position' content='1'><a href='assistanceList.html?category="+x[0].category+"' itemprop='item'>"+x[0].category+"</a>");
					 $("#this-page").append(x[0].subcategory);
					 $("#title").append("<h2 style='color: #2b78e4;'>"+x[0].name+"</h2>");
					 $("#desc").append("<p>"+x[0].description+"</p>");
					 if(x[0].answer!=null)
						 for(i=0;i<x.length;i++){
							 if(i==0)
								$("#faq").append("<div class='panel panel-default'><div class='panel-heading active'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#accordion-15900236' style='color: #2b78e4;' href='#collapse-15900236-"+(i+1)+"'>"+x[i].question+"</a></h4></div><div id='collapse-15900236-"+(i+1)+"' class='panel-collapse collapse in'><div class='panel-body'>"+x[i].answer+"</div></div></div>");
							else
								$("#faq").append("<div class='panel panel-default'><div class='panel-heading'><h4 class='panel-title'><a data-toggle='collapse' data-parent='#accordion-15900236' style='color: #2b78e4;' href='#collapse-15900236-"+(i+1)+"'>"+x[i].question+"</a></h4></div><div id='collapse-15900236-"+(i+1)+"' class='panel-collapse collapse'><div class='panel-body'>"+x[i].answer+"</div></div></div>");
						}
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?id="+id;
               ajaxRequest.open("GET", "http://youcall.altervista.org/conndb/assistanceDesc.php" + queryString, true);
               ajaxRequest.send(null); 
			   
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

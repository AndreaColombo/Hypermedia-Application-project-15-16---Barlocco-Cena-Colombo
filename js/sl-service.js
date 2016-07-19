function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var category;
$( document ).ready(function() {
	category=getParameterByName("category");
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
					 var prec;
					 if(category=="health"){
						$("#category-nav").append("Health");
						$("#banda").addClass("banda2");
						$("#title-cat").append("<img class='img-responsive' src='../img/smartLife/images.jpg' width='477' height='332'>");
					 }
					if(category=="tv"){
						$("#category-nav").append("Tv &amp; Entertainement");
						$("#banda").addClass("banda1");
						$("#title-cat").append("<img class='img-responsive' src='../img/smartLife/smart.jpg' width='477' height='332'>");
					}
					if(category=="person"){
						$("#category-nav").append("Person");
						$("#banda").addClass("banda1");
						$("#title-cat").append("<img class='img-responsive' src='../img/smartLife/tim.jpg' width='477' height='332'>");
					}
					if(category=="home"){
						$("#category-nav").append("Home &amp; Family");
						$("#banda").addClass("banda2");
						$("#title-cat").append("<img class='img-responsive' src='../img/smartLife/download.jpg' width='477' height='332'>");
					}
					for(i=0;i<x.length;i++)
						$(".products").append("<li><a href='sl-desc.html?id="+x[i].id+"'> <img class='img-responsive' src='"+x[i].image+"'  border='0' vspace='10' onmouseover='this.style.opacity=0.6;this.filters.alpha.opacity=40' onmouseout='this.style.opacity=1.0;this.filters.alpha.opacity=100'><p>"+x[i].name+"</p></a></li>");
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?category="+category;
               ajaxRequest.open("GET", "http://youcall.altervista.org/conndb/sl-services.php" + queryString, true);
               ajaxRequest.send(null); 
			   
});
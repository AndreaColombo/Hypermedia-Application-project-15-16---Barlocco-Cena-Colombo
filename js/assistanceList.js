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
					 var i,j,k;
					 var prec;
					 $("#category-nav").append(category);
					 for(i=0;i<x.length;i++){
						 if(prec!=x[i].subcategory)
							$("#bar-menu").append("<li><a href='#"+x[i].subcategory+"'><div>"+x[i].subcategory+"</div></a></li>");
						 prec=x[i].subcategory;
						}
					for(i=0;i<x.length;i=j){
						$("#list").append("<h1 class='category' id='"+x[i].subcategory+"'>"+x[i].subcategory+"</h1>");
						for(j=i;j<x.length && x[j].subcategory==x[i].subcategory;j=k){
							$("#list").append("<h2 class='subcategory'>"+x[j].subsubcategory+"</h2>");
							for(k=j;k<x.length && x[j].subsubcategory==x[k].subsubcategory;k++)
								$("#list").append("<p class='link-assistance'><a href='assistanceDesc.html?id="+x[k].id+"'>"+x[k].name+"</a></p>");
							}
						$("#list").append("<hr>");
						}
					$("#list").append("<hr>");
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?category="+category;
               ajaxRequest.open("GET", "../conndb/assistanceList.php" + queryString, true);
               ajaxRequest.send(null); 
			   
});
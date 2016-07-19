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
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

$( document ).ready(function() {
	var id=getParameterByName("id");
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
					$("#nav-subcat").append("<meta itemprop='name' content = 'SL Services'><meta itemprop='position' content='1'><a href='deviceFilter.html?filter=all&category="+x[0].category+"' itemprop='item'>"+x[0].category+"</a>");
					$("#name-product").append(x[0].model);
					if(x[0].old_price!=null)
						$("#info-product").prepend("<h3>"+x[0].brand+"</h3><h5>"+x[0].model+"</h5><h4><del>"+x[0].old_price+" &euro;</del></h4><h4>"+x[0].price+" &euro;</h4>");
					else
						$("#info-product").prepend("<h3>"+x[0].brand+"</h3><h5>"+x[0].model+"</h5><h4>"+x[0].price+" &euro;</h4>");
					$("#desc").append(x[0].description);
					for(i=0;i<x[0].tech.split('\r\n').length;i++)
						$("#tech").append("<div class='col-sm-3'><p><strong>"+x[0].tech.split('\r\n')[i].split(':')[0]+"</strong></p></div><div class='col-sm-9'><p>"+x[0].tech.split('\r\n')[i].split(':')[1]+"</p></div><br clear='all'>");
					 $("#img-prod").append("<img   src='"+x[0].image+"' class='img-responsive'/>");
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?id="+id;
               ajaxRequest.open("GET", "../conndb/descdev.php" + queryString, true);
               ajaxRequest.send(null); 
			   
			   var assistanceSlRequest;  // The variable that makes Ajax possible!
               
               try {
                  // Opera 8.0+, Firefox, Safari
                  assistanceSlRequest = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try {
                     assistanceSlRequest = new ActiveXObject("Msxml2.XMLHTTP");
                  }catch (e) {
                     try{
                        assistanceSlRequest = new ActiveXObject("Microsoft.XMLHTTP");
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
				var y;
               assistanceSlRequest.onreadystatechange = function(){
                  if(assistanceSlRequest.readyState == 4){
                    y= assistanceSlRequest.responseText;
					y=JSON.parse(y);
					var i;
					if(y.length>0)
						for(i=0;i<y.length;i++)
							$("#assistance").append("<p class='relatedList'><a href='assistanceDesc.html?id="+y[i].id+"'>"+y[i].name+"</a></p>");
					else
						$("#assistance").append("<p class='relatedList'>no Assistance related</p>");
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?id="+id;
               assistanceSlRequest.open("GET", "../conndb/assistDev.php" + queryString, true);
               assistanceSlRequest.send(null); 
			   
			   var slRequest;  // The variable that makes Ajax possible!
               
               try {
                  // Opera 8.0+, Firefox, Safari
                  slRequest = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try {
                     slRequest = new ActiveXObject("Msxml2.XMLHTTP");
                  }catch (e) {
                     try{
                        slRequest = new ActiveXObject("Microsoft.XMLHTTP");
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
				var z;
               slRequest.onreadystatechange = function(){
                  if(slRequest.readyState == 4){
                    z= slRequest.responseText;
					z=JSON.parse(z);
					var i;
					if(z.length>0)
						for(i=0;i<z.length;i++)
							$("#smart-life").append("<p class='relatedList'><a href='sl-desc.html?id="+z[i].id+"'>"+z[i].name+"</a></p>");
					else
						$("#smart-life").append("<p class='relatedList'>no Smart Life related</p>");
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?id="+id;
               slRequest.open("GET", "../conndb/assistSl.php" + queryString, true);
               slRequest.send(null); 
});
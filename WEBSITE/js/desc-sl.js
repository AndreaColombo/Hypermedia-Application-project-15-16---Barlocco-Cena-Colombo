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
					$("#cat").append("<meta itemprop='name' content = 'SL Services'><meta itemprop='position' content='1'><a href='../pages/sl-cat.html?category="+x[0].category+"'itemprop='item'>"+x[0].category+"</a>");
					$("#name").append(x[0].name);
					$("#desc").append(x[0].description);
					$("#rule").append(x[0].activation);
					$("#immagine").append("<img class='centro img-responsive' src = '"+x[0].image+"'>");
					$("#title").append("<h6 class='centro'>"+x[0].name+"</h6>");
					if(x[0].old_price!=null)
						$("#price").append("<h4>Old price:<del>"+x[0].old_price+" &euro;</del></h4><h4>Price:"+x[0].price+" &euro;</h4>");
					else
						$("#price").append("<h4>Price: "+x[0].price+" &euro;</h4>");
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?id="+id;
               ajaxRequest.open("GET", "http://youcall.altervista.org/conndb/desc-sl.php" + queryString, true);
               ajaxRequest.send(null); 
			   
			   var devRequest;  // The variable that makes Ajax possible!
               
               try {
                  // Opera 8.0+, Firefox, Safari
                  devRequest = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try {
                     devRequest = new ActiveXObject("Msxml2.XMLHTTP");
                  }catch (e) {
                     try{
                        devRequest = new ActiveXObject("Microsoft.XMLHTTP");
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
               devRequest.onreadystatechange = function(){
                  if(devRequest.readyState == 4){
                    y= devRequest.responseText;
					y=JSON.parse(y);
					var i;
					if(y.length>0)
						for(i=0;i<y.length;i++)
							$("#devices").append("<p class='relatedList'><a href='description.html?id="+y[i].id+"'>"+y[i].brand+" "+y[i].model+"</a></p>");
					else
						$("#devices").append("<p class='relatedList'>No related Devices</p>");
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?id="+id;
               devRequest.open("GET", "http://youcall.altervista.org/conndb/sl-dev.php" + queryString, true);
               devRequest.send(null); 
			   
});
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
	var filter=getParameterByName("filter");
	var j;
		var categoryRequest;  // The variable that makes Ajax possible!
               
               try {
                  // Opera 8.0+, Firefox, Safari
                  categoryRequest = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try {
                     categoryRequest = new ActiveXObject("Msxml2.XMLHTTP");
                  }catch (e) {
                     try{
                        categoryRequest = new ActiveXObject("Microsoft.XMLHTTP");
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
               categoryRequest.onreadystatechange = function(){
                  if(categoryRequest.readyState == 4){
                     x= categoryRequest.responseText;
					 x=JSON.parse(x);
					 var idcat;
					 $("#category-nav").append(category);
					 if(filter=="all")
						$("#type-panel").append("<p><input type='checkbox' id='cat0' value='all' onchange='allcategory()' checked>all</p>");
					else
						$("#type-panel").append("<p><input type='checkbox' id='cat0' value='all' onchange='allcategory()'>all</p>");
					for(j=0;j<x.length;j++){
						idcat="cat"+(j+1);
						if(filter==x[j].subcategory)
							$("#type-panel").append("<p><input type='checkbox' id="+idcat+" value='"+x[j].subcategory+"' onchange='subcategory(this)' checked>"+x[j].subcategory+"</p>");
						else
							$("#type-panel").append("<p><input type='checkbox' id="+idcat+" value='"+x[j].subcategory+"' onchange='subcategory(this)'>"+x[j].subcategory+"</p>");
						}
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?filter=" + filter+"&category="+category+"&mode=2";
               categoryRequest.open("GET", "http://youcall.altervista.org/conndb/deviceFilter.php" + queryString, true);
               categoryRequest.send(null); 
			   
	var brandRequest;  // The variable that makes Ajax possible!
               
               try {
                  // Opera 8.0+, Firefox, Safari
                  brandRequest = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try {
                     brandRequest = new ActiveXObject("Msxml2.XMLHTTP");
                  }catch (e) {
                     try{
                        brandRequest = new ActiveXObject("Microsoft.XMLHTTP");
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
               brandRequest.onreadystatechange = function(){
                  if(brandRequest.readyState == 4){
                     y= brandRequest.responseText;
					 y=JSON.parse(y);
					 $("#brand-panel").append("<p><input type='checkbox' id='bra0' value='all' onchange='allbrand()' checked>all</p>");
					for(j=0;j<y.length;j++)
						$("#brand-panel").append("<p><input type='checkbox' id='bra"+(j+1)+"' value='"+y[j].brand+"' onchange='brand(this)'>"+y[j].brand+"</p>");
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?filter=" + filter+"&category="+category+"&mode=1";
               brandRequest.open("GET", "http://youcall.altervista.org/conndb/deviceFilter.php" + queryString, true);
               brandRequest.send(null); 

			   var productRequest;  // The variable that makes Ajax possible!
               
               try {
                  // Opera 8.0+, Firefox, Safari
                  productRequest = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try {
                     productRequest = new ActiveXObject("Msxml2.XMLHTTP");
                  }catch (e) {
                     try{
                        productRequest = new ActiveXObject("Microsoft.XMLHTTP");
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
               productRequest.onreadystatechange = function(){
                  if(productRequest.readyState == 4){
                     z= productRequest.responseText;
					 z=JSON.parse(z);
					for(j=0;j<z.length;j++)
						$("#product").append("<div class='col-xs-4'><div class='thumbnail'><img class='img-responsive' src='"+z[j].image+"' alt=''></div><div class='caption'><a href='description.html?id="+z[j].id+"'><h4 class='device-title'>"+z[j].brand+"</h4><p class='device-subtitle'>"+z[j].model+"</p></a><p class='device-title'>"+z[j].price+"&euro;</p></div></div>");
                  }
               }
               
               // Now get the value from user and pass it to
               // server script.
               var queryString = "?filter=" + filter+"&category="+category+"&mode=3";
               productRequest.open("GET", "http://youcall.altervista.org/conndb/deviceFilter.php" + queryString, true);
               productRequest.send(null); 
});

function allcategory(){
	var i;
	var id;
	id="cat0";
	var name=document.getElementById(id);
	if(name.checked)
		for(i=1,id="cat"+i;name!=null;i++,name=document.getElementById(id)){
			document.getElementById(id).checked=false;
			id="cat"+(i+1);
		}
	else{
		document.getElementById("cat0").checked=true;
	}
	filter();
}
function subcategory(id){
	var selected=false;
	if(id.checked){
		document.getElementById("cat0").checked=false;
	}
	else{
		var id2="cat1";
		var name=document.getElementById(id2);
		for(i=1;name!=null;i++,name=document.getElementById(id2)){
			if(document.getElementById(id2).checked)
				selected=true;
			id2="cat"+(i+1);
		}
		if(!selected)
			document.getElementById("cat0").checked=true;
	}
	filter();
}
function allbrand(){
	var i;
	var id;
	id="bra0";
	var name=document.getElementById(id);
	if(name.checked)
		for(i=1,id="bra"+i;name!=null;i++,name=document.getElementById(id)){
			document.getElementById(id).checked=false;
			id="bra"+(i+1);
		}
	else{
		document.getElementById("bra0").checked=true;
	}
	filter();
}
function brand(id){
	var selected=false;
	if(id.checked){
		document.getElementById("bra0").checked=false;
	}
	else{
		var id2="bra1";
		var name=document.getElementById(id2);
		for(i=1;name!=null;i++,name=document.getElementById(id2)){
			if(document.getElementById(id2).checked)
				selected=true;
			id2="bra"+(i+1);
		}
		if(!selected)
			document.getElementById("bra0").checked=true;
	}
	filter();
}

function filter(){
	var filterRequest;  // The variable that makes Ajax possible!
               
               try {
                  // Opera 8.0+, Firefox, Safari
                  filterRequest = new XMLHttpRequest();
               }catch (e) {
                  // Internet Explorer Browsers
                  try {
                     filterRequest = new ActiveXObject("Msxml2.XMLHTTP");
                  }catch (e) {
                     try{
                        filterRequest = new ActiveXObject("Microsoft.XMLHTTP");
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
				var w;
               filterRequest.onreadystatechange = function(){
                  if(filterRequest.readyState == 4){
                     w= filterRequest.responseText;
					 w=JSON.parse(w);
					 $("#product").html("");
					 for(j=0;j<w.length;j++){
						$("#product").append("<div class='col-xs-4'><div class='thumbnail'><img class='img-responsive' src='"+w[j].image+"' alt=''></div><div class='caption'><a href='description.html?id="+w[j].id+"'><h4 class='device-title'>"+w[j].brand+"</h4><p class='device-subtitle'>"+w[j].model+"</p></a><p class='device-title'>"+w[j].price+"&euro;</p></div></div>");}
					}
               }
               
               // Now get the value from user and pass it to
               // server script.
			   var queryString = "?category="+category+"&";
			   var i;
			   var name;
			   var count=0;
			   i=0;
			   for(name=document.getElementById("cat"+i);name!=null;i++,name=document.getElementById("cat"+i)){
				   if(name.checked && count!=0){
					   queryString+="&filterCat"+count+"="+name.value;
					   count++;
				   }
				   if(name.checked && count==0){
					   queryString+="filterCat"+count+"="+name.value;
					   count++;
				   }
				   
			   }
			   i=0;
			   count=0;
			   for(name=document.getElementById("bra"+i);name!=null;i++,name=document.getElementById("bra"+i)){
				   if(name.checked){
					   queryString+="&filterBra"+count+"="+name.value;
					   count++;
				   }
			   }
               filterRequest.open("GET", "http://youcall.altervista.org/conndb/filter.php" + queryString, true);
               filterRequest.send(null); 
}
$(function(){

    $("ul.dropdown li").hover(function(){
    
        $(this).addClass("hover");
        $('ul:first',this).css('visibility', 'visible');
    
    }, function(){
    
        $(this).removeClass("hover");
        $('ul:first',this).css('visibility', 'hidden');
    
    });
    
    $("ul.dropdown li ul li:has(ul)").find("a:first").append(" &raquo; ");

});

$(document).ready(function(){

	$("#contact-slide").click(function(){
	  $("#contact-box").slideToggle("normal");
	  $(this).toggleClass("active");
	  $("#about-box").slideUp("normal");
	$(".close").animate({opacity:"1.0"}, 100);
	});

	$("#about-slide").click(function(){
	  $("#about-box").slideToggle("normal");
	  $(this).toggleClass("active");
	  $("#contact-box").slideUp("normal");
	$(".close").animate({opacity:"1.0"}, 100);
	});

	$(".close").click(function(){
	  $("#contact-box").slideUp("normal");
	  $("#about-box").slideUp("normal");
	$(this).animate({opacity:"0.0"}, 100);
	});

});

/*
function loadXMLDoc(loadurl,effectdiv,lochash) {
var xmlhttp;
var loadurl;
var effectdiv;

if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200) {
    document.getElementById(effectdiv).innerHTML=xmlhttp.responseText;
    }
  }
	xmlhttp.open("GET",loadurl,true);
	xmlhttp.send();
	location.hash = lochash;
	
}

function jumpproject(projectid,category) {
	var projectid;
	var category;
	var execurl = "/content/template/project-container.php?project=" + projectid + "&category=" + category + "";
	var effectdiv = "main-container";
	var lochash = projectid;
	loadXMLDoc(execurl, effectdiv,lochash);
}
*/
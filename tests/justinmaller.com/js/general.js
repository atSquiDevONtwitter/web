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


jQuery(function($){ 
	$('div.project-box').hide();
	$('div.project-box').onImagesLoaded(function(_this){
		$(_this).fadeIn(500);
	  });


	 
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

Shadowbox.init({
 language: 'en',
 players: ['img', 'html'],
	counterType: 'skip',
	continuous: true,
	displayCounter: false,
	animSequence: 'wh',
	initialHeight: 100,
	initialWidth: 100,
	viewportPadding: 10
});
*/
/*

$(document).ready(function(){
    $("a[rel^='pphoto']").prettyPhoto();
  });
*/
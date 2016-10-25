
//Scroll hover Map isn't zoom
$(".bar").click(function() {
	$(".bar").css("width","0%");
    setTimeout(function(){ $(".bar").css('width','100%'); },500)	
});
		
$(".bar").mousedown(function(e){ 
	$(".bar").css("width","0%");
    setTimeout(function(){ $(".bar").css('width','100%'); },500)
});


//Scroll Spy
$('body').scrollspy({
    target: ".applications-sidebar"
});
$('window').on("load", function() {
    $('body').scrollspy("refresh");
})
$('.applications-sidebar').affix({
    offset: {     
      top: $('.applications-sidebar').offset().top,
      bottom: ($('#footerBottom').outerHeight(true) + $('#footerLink').outerHeight(true) + $('#contact').outerHeight(true)) + 40
	  
    }
});



				   
					 
//oi_sticky Navbar Top Media

/*var windowWidth = $(window).width();
    if(windowWidth > 991){
    if (($("body").height() - $(window).height()) > 100) {
        //alert("scroll");
        var stickyNavTopp = 0;
        var stickyNavTop = $('#topMedia').offset().top;
        stickyNavTopp = stickyNavTop + $('#topMedia').outerHeight();
        $(window).scroll(function() {
            if ($(this).scrollTop() > stickyNavTopp) {
                $('#topMedia').addClass('oi_sticky animated slideInDown').removeClass("fadeIn").fadeIn().animate({'opacity':'1'},5);;
                $('body').addClass('oi_sticky_body');
                $('.oi_sticky_body .wide_cont').css('padding-top', $('.oi_header_holder').outerHeight());

            } else {
                $('#topMedia').removeClass('oi_sticky animated slideInDown').addClass("fadeIn").removeAttr('style');
                $('body').removeClass('oi_sticky_body')
                $('.wide_cont').removeAttr('style');
            }
        });
    };
   
}
*/
//oi_sticky Navbar Logo Nav

/*var windowWidth = $(window).width();
    if(windowWidth > 991){
    if (($("body").height() - $(window).height()) > 100) {
        //alert("scroll");
        var stickyNavTopp = 0;
        var stickyNavTop = $('#logoNav').offset().top;
        stickyNavTopp = stickyNavTop + $('#logoNav').outerHeight();
        $(window).scroll(function() {
            if ($(this).scrollTop() > stickyNavTopp) {
                $('#logoNav').addClass('oi_stickylogoNav  animated slideInDown').removeClass("fadeIn").fadeIn().animate({'opacity':'1'},5);;
                $('body').addClass('oi_sticky_body');
                $('.oi_sticky_body .wide_cont').css('padding-top', $('.oi_header_holder').outerHeight());

            } else {
                $('#logoNav').removeClass('oi_stickylogoNav animated slideInDown').addClass("fadeIn").removeAttr('style');
                $('body').removeClass('oi_sticky_body')
                $('.wide_cont').removeAttr('style');
            }
        });
    };
   
}*/

//oi_sticky Navbar Logo Nav

/*var windowWidth = $(window).width();
    if(windowWidth > 991){
    if (($("body").height() - $(window).height()) > 100) {
        //alert("scroll");
        var stickyNavTopp = 0;
        var stickyNavTop = $('#navigaTion').offset().top;
        stickyNavTopp = stickyNavTop + $('#navigaTion').outerHeight();
        $(window).scroll(function() {
            if ($(this).scrollTop() > stickyNavTopp) {
                $('#navigaTion').addClass('oi_stickynavigaTion  animated slideInDown').removeClass("fadeIn").fadeIn().animate({'opacity':'1'},5);;
                $('body').addClass('oi_sticky_body');
                $('.oi_sticky_body .wide_cont').css('padding-top', $('.oi_header_holder').outerHeight());

            } else {
                $('#navigaTion').removeClass('oi_stickynavigaTion animated slideInDown').addClass("fadeIn").removeAttr('style');
                $('body').removeClass('oi_sticky_body')
                $('.wide_cont').removeAttr('style');
            }
        });
    };
   
}
*/






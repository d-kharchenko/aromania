$(function () {
	$(window).scroll(function(){
    if  ($(window).scrollTop() > 300)
        $('.to-top').fadeIn(500);
        else
        $('.to-top').fadeOut(500);  
    });
    $('.to-top').bind('click',function(){
        $(this).fadeOut(200);  
    });
    function adaptiveMenu(){
    	if ($(window).width() < 768) {
		    $('.header-navbar').attr('uk-offcanvas', '');
		    $('.uk-navbar-container').attr('class', 'uk-offcanvas-bar uk-box-shadow-xlarge');
		  }
		 else {
		 	$('#header-menu').removeAttr('uk-offcanvas');
		 	$('#header-menu').attr('class','header-navbar')
		    $('.header-navbar nav').attr('class','uk-navbar-container uk-navbar');

		 }
    }
   
	adaptiveMenu()
	$(window).resize(function(){
		adaptiveMenu()
	})  
})
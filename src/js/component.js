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
})
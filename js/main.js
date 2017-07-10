$(document).ready(function(){      
    //tabs
    $('#tabs li').click(function(){
        var thisClass = this.className.slice(0,2);
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.' + thisClass).fadeIn(500);
        $('#tabs li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('li.t1').click();
});
    //up   
$(document).ready(function(){    
    $(".arrow .top").hide();
            $(function () {
            $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $(".arrow .top").css("display","block");}
        else {
            $(".arrow .top").css("display","none");}
    });
$('.arrow .top').click(function () {
    $('html, body').animate({
    scrollTop: $(".header ").offset().top
    }, 2000);
    });
    });
}); 
$(document).ready(function(){
  $('.bxslider').bxSlider();
});

$(document).ready(function(){
	$('.menu').click(function(){
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
		return false;
	});
});
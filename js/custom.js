/*-------------preloader fuction-----------*/
$(window).load(function() {
	var window_height = $(window).height();
	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");
})
$( document ).ready(function() {
$('.owl-carousel').owlCarousel({
        margin:0,
        nav:false,
        items:1,
        autoplay: true,
        loop: true,
        center: true,
        mouseDrag: false,
        navigation:true,
        transitionStyle : "fade",
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });

$( ".menubut" ).click(function() {
  $( ".menuarea" ).slideToggle( "fast", function() {
    // Animation complete.
  });
});
});
// var width = $(window).width();
// $('.survice-content').slick(); 
$(function(){
	function sliderSetting(){
	    var width = $(window).width();
	    if(width <= 860){
	        $('.sp-swipe').not('.slick-initialized').slick({
              autoplay: true,
	            centerMode: false,
	            arrows:false,
	            infinite: true,
	            dots:true,
              dotsClass:"dots-class",
	            slidesToShow: 1,
	            slidesToScroll: 1,
	            centerPadding: '0px',
	        });
	    } else {
	        $('.sp-swipe.slick-initialized').slick('unslick');
	    }
	}
	sliderSetting();
	$(window).resize(function(){
	    sliderSetting();
	});
});
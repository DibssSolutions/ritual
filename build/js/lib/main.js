// When the DOM is ready, run this function
$(document).ready(function() {
    "use strict"; // Start of use strict

    var $gallery_carousel = $(".gallery-carousel");
    var $location_carousel = $(".location-carousel");
    var $amenities_carousel = $(".amenities-carousel");
    var $amenities_carousel2 = $(".amenities-carousel2");
    var $footer_quote = $(".footer-quote");
    var $funeral_carousel = $(".funeral-carousel");
    var $home_carousel = $(".home-carousel");
    var $home_carousel2 = $(".home-carousel2");
    var $home_carousel3 = $(".home-carousel3");
    var $ho_carousel = $(".ho-carousel");
    var $service_carousel = $(".service-carousel");
    var $shop_carousel = $(".shop-carousel");

    // SHOP CAROUSEL
    if ($shop_carousel.length && $.fn.slick) {
        $shop_carousel.slick({
            autoplay: false,
            dots: true,
            prevArrow: $('.prev8'),
            nextArrow: $('.next8'),
            customPaging: function(slider, i) {
                var thumb = $(slider.$slides[i]).data('thumb');
                return '<a><img src="' + thumb + '"></a>';
            },

            responsive: [{
                breakpoint: 500,
                settings: {
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // GALLERY CAROUSEL
    if ($gallery_carousel.length && $.fn.slick) {
        $gallery_carousel.slick({

            infinite: true,
            autoplay: false,
            dots: true,
            arrows: false,
            customPaging: function(slider, i) {
                var thumb = $(slider.$slides[i]).data('thumb');
                return '<a><img src="' + thumb + '"></a>';
            },

            responsive: [{
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });
    }

    // LOCATION CAROUSEL
    if ($location_carousel.length && $.fn.slick) {
        $location_carousel.slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            responsive: [{
                breakpoint:768,
                settings: {
                	dots: true,
                	arrows:false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]            
        });
    }

   // FACILITIES CAROUSEL
    if ($amenities_carousel.length && $.fn.slick) {
        $amenities_carousel.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false 
        });
    }

    // AMENITIES CAROUSEL
    if ($amenities_carousel2.length && $.fn.slick) {
        $amenities_carousel2.slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.prev2'),
            nextArrow: $('.next2'),
            responsive: [{
                breakpoint:800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
     				}
    			},
    			{
                breakpoint:540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]            
        });
    }

   // FOOTER TESTIMONIAL CAROUSEL
    if ($footer_quote.length && $.fn.slick) {
        $footer_quote.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false 
        });
    }

    if ($funeral_carousel.length && $.fn.slick) {
        $funeral_carousel.slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            vertical: true,
            prevArrow: $('.prev3'),
            nextArrow: $('.next3'),
            responsive: [{
                breakpoint:993,
                settings: {
                    dots: false,
                    arrows:false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }]            
        });
    }

    // HOME CAROUSEL
    if ($home_carousel.length && $.fn.slick) {
        $home_carousel.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: $('.prev4'),
            nextArrow: $('.next4'),
            responsive: [{
                breakpoint:993,
                settings: {
                    arrows:false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]            
        });
    }

    if ($home_carousel2.length && $.fn.slick) {
        $home_carousel2.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.prev5'),
            nextArrow: $('.next5'),
            responsive: [{
                breakpoint:993,
                settings: {
                    arrows:false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]            
        });
    }    

    if ($home_carousel3.length && $.fn.slick) {
        $home_carousel3.slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.prev6'),
            nextArrow: $('.next6'),
            responsive: [{
                breakpoint:993,
                settings: {
    				arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]            
        });
    }    

	// ACCORDION
	function toggleChevron(e) {
	    $(e.target)
	        .prev('.accordion-heading')
	        .find("i.indicator")
	        .toggleClass('fa-chevron-right fa-chevron-down');
	}
	$('#accordion').on('hidden.bs.collapse', toggleChevron);
	$('#accordion').on('shown.bs.collapse', toggleChevron);

    // HOME CAROUSEL
    if ($ho_carousel.length && $.fn.slick) {
        $ho_carousel.slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            prevArrow: $('.ho-prev'),
            nextArrow: $('.ho-next'),
            responsive: [{
                breakpoint:800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
     				}
    			},
    			{
                breakpoint:540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]            
        });
    }

    // SERVICE CAROUSEL
    if ($service_carousel.length && $.fn.slick) {
        $service_carousel.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            prevArrow: $('.prev7'),
            nextArrow: $('.next7')
        });
    }

    new WOW().init();

    $(".cart-header").on("click", function() {
       $(this).toggleClass("cart-show");
    });

    $(".cart-header2").on("click", function() {
       $(this).toggleClass("cart-show");
    });

});

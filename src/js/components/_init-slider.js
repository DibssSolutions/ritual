import slick from 'slick-carousel';

$('.js-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptive: true,
  fade: true,
  asNavFor: '.js-slider-nav',
  prevArrow: '<button type="button" class="slider__prev"><i class="fa fas fa-angle-left"></i>Назад</button>',
  nextArrow: '<button type="button" class="slider__next">Далее<i class="fa fas fa-angle-right"></i></buttont>'
});

$('.js-slider-nav').slick({
  slidesToShow: 8,
  slidesToScroll: 1,
  asNavFor: '.js-slider-for',
  centerMode: true,
  focusOnSelect: true
  // responsive: [
  //   {
  //     breakpoint: 1023,
  //     settings: {
  //       slidesToShow: 5,
  //     }
  //   },
  //   {
  //     breakpoint: 767,
  //     settings: {
  //       slidesToShow: 0,
  //     }
  //   }
  // ]
});
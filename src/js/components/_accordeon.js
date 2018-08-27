$(document).ready(function() {

  $('.accordeon .accordeon__head').on('click', accordeon);
  // $('.catalogue__item').hover( catalogueAccordeon);
});

function accordeon() {
  $(this).toggleClass('accordeon_active');
  //   $('.accordeon .accordeon__body').not($(this).next()).slideUp(400);
  $(this).next().slideToggle(400);

}


// accordion (new-company)
$(document).ready(function() {
  var accordionWrapper = $('.js-accordion-wrap');

  accordionWrapper.each(function() {
    var _this = $(this);
    var accorTrig = _this.find('.js-accord-btn');
    var accordions = _this.find('.js-accord');
    var accordTextBtn = _this.find('.js-accord-text-btn');
   
    accorTrig.on('click', function() {
      var parent = $(this).parents('.js-accord');
      var open = 'is-open';
      var contentBlock = parent.find('.js-accordion__hide-block');
      var contentText = parent.find('.js-accord-text-btn');
      if (!parent.hasClass(open)) {
        parent.addClass(open);
        contentText.text('Показать');
        contentBlock.slideUp(500);
      } else {
        parent.removeClass(open);
        contentText.text('Скрыть');
        contentBlock.slideDown(500);

      }   
    });
  });
});




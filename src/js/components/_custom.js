//post-page accord

$(document).ready(function() {

  var dropDownWrapper = $('.js-drop-dawn-wrap');

  dropDownWrapper.each(function() {

    var that = $(this);
    var wrapper = that.find('.js-wrap');
    var clickBtn = that.find('.js-click');
    var hideBlock = that.find('.js-hide');

    clickBtn.on('click', function() {
      var parent = $(this).parents('.js-wrap');
      var open = 'is-open';
      var thisHideBlock = parent.find(hideBlock);
      if (!parent.hasClass(open)) {
        parent.addClass(open);
        thisHideBlock.slideUp(500);
      } else {
        parent.removeClass(open);
        thisHideBlock.slideDown(500);
      };
    });
    $(window).resize(function() {
      if($(window).width() >= 768) {
        $('.js-hide').removeAttr('style');
        $('.js-wrap').removeClass('is-open');
      }
    });
  });
});

//add photo-gullery

$(document).ready(function() {
  $('.js-btn-add-photo').on('click', function() {
    $('.js-show-add-photo').slideToggle(500);
  });
});


//tabs

(function($) {
  $(function() {
    var tab = $('.js-tab');

    tab.on('click', function() {
      $(this).addClass('is-active').siblings().removeClass('is-active');
    });
  });
})(jQuery);


//add banner

$(document).ready(function() {
  $('.js-show-ad-banner').on('click', function() {
    $('.js-show-banner').slideToggle(500);
  });
});


//tabs alfabet

(function($) {
  $(function() {
    var tab = $('.js-alphabet');

    tab.on('click', function() {
      $(this).addClass('is-active').siblings().removeClass('is-active');
    });
  });
})(jQuery);

import { WIN, ACTIVE } from '../constants';
import { SCROLL_TO } from '../utils';

;(function() {

  let $blockItem = $('.js-navigation-section');
  let link = $('.js-menu-link');

  function onScroll(event) {
    var $scrollPos = WIN.scrollTop();
    $blockItem.each(function() {
      let $that = $(this);
      let id = $that.attr('id');
      if ($that.offset().top <= $scrollPos && $that.offset().top + $that.height() > $scrollPos) {
      	link.removeClass(ACTIVE);
        $('[href="#'+id+'"]').addClass(ACTIVE);
      }
    });
  };

  link.on('click', function() {
  	let thisAttr = $(this).attr('href');
  	let position = $(thisAttr).offset().top + $('.header4');
  	SCROLL_TO(position);
  });

  WIN.on('scroll touchend', onScroll);
  
})();

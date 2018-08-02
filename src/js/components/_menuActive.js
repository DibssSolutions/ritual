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
      let headerHeight = $('.header4').height();
      if ($that.offset().top-headerHeight/1.5 <= $scrollPos && $that.offset().top-headerHeight/1.5 + $that.height() > $scrollPos) {
      	link.removeClass(ACTIVE);
        $('[href="#'+id+'"]').addClass(ACTIVE);
      }
    });
  };

  link.on('click', function() {
  	let thisAttr = $(this).attr('href');
  	let position = $(thisAttr).offset().top;
    let headerHeight = $('.header4').height();
  	SCROLL_TO(position-headerHeight/1.5);
  });

  WIN.on('scroll touchend', onScroll);
  
})();

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
      let headerHeight = $('.header4').innerHeight();
      if (Math.floor($that.offset().top-headerHeight/2) <= $scrollPos && Math.floor($that.offset().top-headerHeight/1.5) + $that.innerHeight() > $scrollPos) {
      	link.removeClass(ACTIVE);
        $('[href="#'+id+'"]').addClass(ACTIVE);
      }
    });
  };

  link.on('click', function() {
  	let thisAttr = $(this).attr('href');
  	let position = $(thisAttr).offset().top;
    let headerHeight = $('.header4').innerHeight();
    SCROLL_TO(Math.floor(position-headerHeight/2));
    console.log(Math.floor(position-headerHeight/2));
  });

  WIN.on('scroll touchend', onScroll);
  
})();

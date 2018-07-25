import { SCROLL_TO } from '../utils';
import { DOC, WIN } from '../constants';

const header = $('.js-header-wrap');

WIN.on('scroll', function() { 
  let top = DOC.scrollTop();
  let winHeught = WIN.height();
  
  (top >= winHeught) 
    ? header.addClass('is-animate')
    : header.removeClass('is-animate');

  (top >= winHeught / 2) 
    ? header.addClass('is-hide')
    : header.removeClass('is-hide');
});



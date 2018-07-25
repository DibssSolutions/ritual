import { SCROLL_TO } from '../utils';
import { DOC, WIN } from '../constants';

const btnUp = $('.js-btn-up');

WIN.on('scroll', function() { 
  let top = DOC.scrollTop();
  let winHeught = WIN.height();
  (top >= winHeught) 
    ? btnUp.addClass('is-show')
    : btnUp.removeClass('is-show');
});

btnUp.on('click', () => SCROLL_TO(0) );

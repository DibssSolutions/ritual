import { OPEN, ACTIVE, widthMD, widthSM, WIN } from '../constants';

;(function() {

  let drop = $('.js-drop'),
    btn = $('.js-open-drop'),
    dropGroup = $('.js-drop-group'),
    dropWrapHeights = [];
	
  // add class has-show-block
  drop.each(function() {
    let drop = $(this),
      hiddenBlock = drop.find('.js-drop-shows');
    if (hiddenBlock.length) {
      drop.addClass('has-show-block');
    }

  });

  // add min-height for drop-wrap
  dropGroup.each(function() {
    let group = this,
      wraps = group.querySelectorAll('.js-drop-wrap');

    if (WIN.width() <= widthMD) return;

    for (var i = 0; i < wraps.length; i++) {
      let wrapHeight = wraps[i].offsetHeight;
      dropWrapHeights.push(wrapHeight);
    }
    for (var i = 0; i < wraps.length; i++) {
      wraps[i].style.minHeight = Math.max.apply(null, dropWrapHeights)+'px';
    }

  });

  // add btn-text
  btn.each(function() {
    let _this = $(this),
      btnText = _this.find('.js-drop-btn-text'),
      textOpen = _this.data('text-open');
    btnText.text(textOpen);
  });

  btn.on('click', function(e) {
    e.preventDefault();
    let _this = $(this),
      thisDrop = _this.parents('.js-drop'),
      hiddenBlock = thisDrop.find('.js-drop-hidden'),
      thisMap = thisDrop.find('.js-location-map'),
      textOpen = _this.data('text-open'),
      textClose = _this.data('text-close'),
      btnTextWrap = _this.find('.js-drop-btn-text'),
      duration = 300;
    $('.drop__show').toggleClass('no-gradient');
			
    if (!_this.hasClass(OPEN)) {
      _this.addClass(OPEN);
      btnTextWrap.text(textClose);
      hiddenBlock.slideDown(duration);
    }
    else {
      _this.removeClass(OPEN);
      btnTextWrap.text(textOpen);
      hiddenBlock.slideUp(duration);
    }
  });

})();

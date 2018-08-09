function counter() {
  var number = $('.js-counter');
  number.each(function() {
    var _this = $(this);
    var max_number = +(_this.attr('data-max-number'));
    var input = _this.find('.js-counter-input');
    var plus = _this.find('.js-counter-plus');
    var minus = _this.find('.js-counter-minus');
    plus.bind('click', function() {
      var val = +(input.val());
      if (val >= max_number) {
        return false;
      }
      else {
        val += 1;
        input.val(val);
      }
    });
    minus.bind('click', function() {
      var val = +(input.val());
      if (val > 1) {
        val -= 1;
        input.val(val);
      }
      else {
        return false;
      }
    });
  });
}
counter();

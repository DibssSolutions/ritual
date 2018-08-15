import select2 from 'select2';

$(document).ready(function() {
  $('.js-select').select2({
    minimumResultsForSearch: Infinity
  });

  $('.ps-select select').select2({
    minimumResultsForSearch: Infinity
  });
  // $($('.ps-select select').data('select2').$container).addClass('select--small');
  // $($('.ps-select select').data('select2').$dropdown).addClass('select--small__drop');
  $('.ps-select select').each(function() {
    $($(this).data('select2').$container).addClass('select--small');
    $($(this).data('select2').$dropdown).addClass('select--small__drop');
  });
});

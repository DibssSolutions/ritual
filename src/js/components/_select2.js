import Select2 from 'select2';

$(document).ready(function() {
  $('.js-select').select2({
    minimumResultsForSearch: Infinity
  });
});

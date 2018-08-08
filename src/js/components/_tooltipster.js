import tooltipster from 'tooltipster';
console.log(tooltipster);
$(document).ready(function() {
  $('.js-tooltip').tooltipster({
    contentCloning: true
    // theme: 'tooltipster-light'
  });
});

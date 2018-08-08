$(document).ready(function() {

  $('.accordeon .accordeon__head').on('click', accordeon);
});

function accordeon() {
  $(this).toggleClass('accordeon_active');
  //   $('.accordeon .accordeon__body').not($(this).next()).slideUp(400);
  $(this).next().slideToggle(400);
}

$(document).ready(function() {

  $('.accordeon .accordeon__head').on('click', accordeon);
  // $('.catalogue__item').hover( catalogueAccordeon);
});

function accordeon() {
  $(this).toggleClass('accordeon_active');
  //   $('.accordeon .accordeon__body').not($(this).next()).slideUp(400);
  $(this).next().slideToggle(400);
};


// function catalogueAccordeon() {
//   // $(this).toggleClass('li_active');
//   // $('.catalogue__subcategory').not($(this).next()).slideUp(400);
//   $(this).children('.catalogue__subcategory').slideToggle(400);
// };

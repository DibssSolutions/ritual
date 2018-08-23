import datepicker from 'bootstrap-datepicker';
$('.js-datepicker').datepicker();
$.fn.datepicker.dates['ru'] = {
  days: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
  daysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  daysMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Ноя', 'Дек'],
  today: 'Сегодня',
  clear: 'Очистить'
};
$('.js-datepicker-inline').datepicker({
  inline: true,
  startDate: 'now',
  todayHighlight: true,
  language: 'ru',
});

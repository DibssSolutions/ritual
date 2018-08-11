import searchableOptionList from '../lib/sol';

const select = $('.js-select-mult');
select.searchableOptionList({
  maxHeight: '122px',
  showSelectAll: false,
  texts: {
    searchplaceholder: 'Выбрать услугу из списка'
  }
});

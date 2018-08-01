import stickySidebar from '../lib/sticky-sidebar';

const aside = '.js-aside';
const sidebar = new stickySidebar(aside, {
  topSpacing: 100,
  bottomSpacing: 320,
  containerSelector: '.js-aside-container',
  innerWrapperSelector: '.sidebar__container',
  resizeSensor: true
});

import stickySidebar from '../lib/sticky-sidebar';
import { DOC } from '../constants';

DOC.ready(() => {
  const aside = '.js-aside';
  if ($(aside).length) {
    const sidebar = new stickySidebar(aside, {
      topSpacing: 100,
      bottomSpacing: 20,
      containerSelector: '.js-aside-container',
      innerWrapperSelector: '.aside__container',
      resizeSensor: true
    });
  };
});

import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import ScrollMagic from 'scrollmagic';

import './common.scss';

jQuery(document).ready(() => {
    console.log("COUCOU je marche");

    const chap01 = document.querySelector('#chapter-01');
    const chap02 = document.querySelector('#chapter-02');
    const chap03 = document.querySelector('#chapter-03');

    // ScrollMagic
    const magicController = new ScrollMagic.Controller();

    if(chap02 !== null && chap02 !== undefined) {
      new ScrollMagic.Scene({
        triggerElement: chap02
      }).on('enter', (event) => {
        console.log('1')
      }).on('leave', (event) => {
          console.log('2')
      }).addTo(magicController);
    }
});

lightbox.option({
    'albumLabel': "Image %1 sur %2",
    'alwaysShowNavOnTouchDevices': true,
    'fadeDuration': 200,
    'imageFadeDuration': 200,
    'resizeDuration': 350,
    'wrapAround': true
});

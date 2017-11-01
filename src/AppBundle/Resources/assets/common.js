import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import ScrollMagic from 'scrollmagic';

import './common.scss';

jQuery(document).ready(() => {
    console.log("COUCOU je marche");
});

lightbox.option({
    'albumLabel': "Image %1 sur %2",
    'alwaysShowNavOnTouchDevices': true,
    'fadeDuration': 200,
    'imageFadeDuration': 200,
    'resizeDuration': 350,
    'wrapAround': true
});

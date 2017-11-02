import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import ScrollMagic from 'scrollmagic';

import './common.scss';
import './Home/home.js';

jQuery(document).ready(() => {
    const chap00 = document.querySelector('#chapter-00');
    const chap01 = document.querySelector('#chapter-01');
    const chap02 = document.querySelector('#chapter-02');
    const chap03 = document.querySelector('#chapter-03');
    const chap04 = document.querySelector('#chapter-04');
    const chap05 = document.querySelector('#chapter-05');
    const chap06 = document.querySelector('#chapter-06');
    const chap07 = document.querySelector('#chapter-07');
    const chap08 = document.querySelector('#chapter-08');
    const chap09 = document.querySelector('#chapter-09');
    const chapend = document.querySelector('#chapter-end');
    const decoy01 = document.querySelector('#decoy-01');
    const decoy02 = document.querySelector('#decoy-02');
    const decoy03 = document.querySelector('#decoy-03');
    const decoy04 = document.querySelector('#decoy-04');
    const decoy05 = document.querySelector('#decoy-05');
    const decoy06 = document.querySelector('#decoy-06');
    const decoy07 = document.querySelector('#decoy-07');
    const decoy08 = document.querySelector('#decoy-08');
    const decoy09 = document.querySelector('#decoy-09');
    const decoy10 = document.querySelector('#decoy-10');
    const gotop = document.querySelector('#gotop');

    // ScrollMagic
    const magicController = new ScrollMagic.Controller();

    if(chap01 !== null && chap01 !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy01
        }).on('enter', (event) => {
            chap00.classList.add('opac0');
            chap01.classList.remove('opac0');
            gotop.classList.remove('opac0');
        }).on('leave', (event) => {
            chap00.classList.remove('opac0');
            chap01.classList.add('opac0');
            gotop.classList.add('opac0');
        }).addTo(magicController);
    }
    if(chap02 !== null && chap02 !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy02
        }).on('enter', (event) => {
            chap01.classList.add('opac0');
            chap02.classList.remove('opac0');
        }).on('leave', (event) => {
            chap01.classList.remove('opac0');
            chap02.classList.add('opac0');
        }).addTo(magicController);
    }
    if(chap03 !== null && chap03 !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy03
        }).on('enter', (event) => {
            chap02.classList.add('opac0');
            chap03.classList.remove('opac0');
        }).on('leave', (event) => {
            chap02.classList.remove('opac0');
            chap03.classList.add('opac0');
        }).addTo(magicController);
    }
    if(chap04 !== null && chap04 !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy04
        }).on('enter', (event) => {
            chap03.classList.add('opac0');
            chap04.classList.remove('opac0');
        }).on('leave', (event) => {
            chap03.classList.remove('opac0');
            chap04.classList.add('opac0');
        }).addTo(magicController);
    }
    if(chap05 !== null && chap05 !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy05
        }).on('enter', (event) => {
            chap04.classList.add('opac0');
            chap05.classList.remove('opac0');
        }).on('leave', (event) => {
            chap04.classList.remove('opac0');
            chap05.classList.add('opac0');
        }).addTo(magicController);
    }
    if(chap06 !== null && chap06 !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy06
        }).on('enter', (event) => {
            chap05.classList.add('opac0');
            chap06.classList.remove('opac0');
        }).on('leave', (event) => {
            chap05.classList.remove('opac0');
            chap06.classList.add('opac0');
        }).addTo(magicController);
    }
    if(chap07 !== null && chap07 !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy07
        }).on('enter', (event) => {
            chap06.classList.add('opac0');
            chap07.classList.remove('opac0');
        }).on('leave', (event) => {
            chap06.classList.remove('opac0');
            chap07.classList.add('opac0');
        }).addTo(magicController);
    }
    if(chap08 !== null && chap08 !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy08
        }).on('enter', (event) => {
            chap07.classList.add('opac0');
            chap08.classList.remove('opac0');
        }).on('leave', (event) => {
            chap07.classList.remove('opac0');
            chap08.classList.add('opac0');
        }).addTo(magicController);
    }
    if(chap09 !== null && chap09 !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy09
        }).on('enter', (event) => {
            chap08.classList.add('opac0');
            chap09.classList.remove('opac0');
        }).on('leave', (event) => {
            chap08.classList.remove('opac0');
            chap09.classList.add('opac0');
        }).addTo(magicController);
    }
    if(chapend !== null && chapend !== undefined) {
        new ScrollMagic.Scene({
            triggerElement: decoy10
        }).on('enter', (event) => {
            chap09.classList.add('opac0');
            chapend.classList.remove('opac0');
        }).on('leave', (event) => {
            chap09.classList.remove('opac0');
            chapend.classList.add('opac0');
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

'use strict';

import './main.scss';

const app = {
  modalInit: function () {
    const contactBtn = document.getElementById('contactLi');
    const contactModal = document.querySelector('.contact');
    contactBtn.addEventListener(
      'click',
      (e) => {
        contactModal.classList.add('active');
        contactModal.classList.remove('inactive');
        contactModal.classList.remove('out');
        console.log(e.target);
      },
      true
    );

    window.onclick = function (e) {
      if (e.target == contactModal) {
        contactModal.classList.add('inactive');
        contactModal.classList.add('out');
        contactModal.classList.remove('active');
      }
    };
  },
  /* loadr function */
  loaderInit: function () {
    setTimeout(() => {
      const getLoader = document.querySelector('.loader');
      const getCircle = document.querySelectorAll('.circle');
      const getCobtainer = document.querySelector('.container');

      getLoader.classList.add('hidden');
      getLoader.classList.remove('visible');
      getCobtainer.classList.remove('hidden');
      getCobtainer.classList.add('visible');

      getCircle.forEach((circles) => {
        circles.classList.remove('hidden');
        circles.classList.add('visible');
      });
    }, 4000);
  },
  /* app init */
  init: function () {
    console.log('*** App starting ***');

    this.modalInit();
    this.loaderInit();
  },
};

app.init();

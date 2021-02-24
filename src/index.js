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
  /* app init */
  init: function () {
    console.log('*** App starting ***');

    this.modalInit();
  },
};

app.init();

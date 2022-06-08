"use strict";

/////////////MODAL///////////////
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnCloseModal = document.querySelector('.btn--close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');


const openModal = (e) => {
    e.preventDefalut();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

/////////////////////////SMOOTH SCROLLING/////////////////////
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (e) => {
    section1.scrollIntoView({behavior: 'smooth'});
});

/////////////////////TYPES OF EVENTS AND EVENT HANDLERS/////////////////////
const h1 = document.querySelector('h1');

const alertH1 = (e) => {
    alert('You are reading the heading.');
}

h1.addEventListener('mouseenter', alertH1);
setTimeout(() => {
    h1.removeEventListener('mouseenter', alertH1)
}, 3000);

////////////////////////  /////////////////////////////////




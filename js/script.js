"use strict";




/////////////////////////MODAL////////////////////////////////
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

///////////////////PAGE NAVIGATION/////////////////////////////


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

////////////////////////EVENT PROPAGATION in PRACTICE/////////////////////////////////
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;

document.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', function(e) {

    //this.style.backgroundColor = randomColor();
    //console.log('LINK', e.target, e.currentTarget);
}));

document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV LINKS', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
}, true);

//////////////////////EVENT DELEGATION - PAGE NAVIGATION SMOOTH SCROLLING///////////////////////
document.querySelector('.nav__links').addEventListener('click', (e) => {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
        const id = e.target.getAttribute('href');
        // if (id === '#') {
        //     return;
        // }
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
});

////////////////////DOM TRAVERSING///////////////////////////

///////****************Going downwards: Child *************//////////
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);

console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

///////****************Going upwards: Parent *************//////////
/*
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('header').style.background = '$color-secondary';

h1.closest('h1').style.background = '#9f1';
*/



///////////////////TABBED COMPONENT/////////////////////////////








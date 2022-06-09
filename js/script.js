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

/*document.querySelector('.nav__links').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV LINKS', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function(e) {
    this.style.backgroundColor = randomColor();
    console.log('NAV', e.target, e.currentTarget);
}, true);
*/
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
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.operations__tab');
   // console.log(clicked);
   // Guard clause
    if (!clicked) return;

    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    tabsContent.forEach(c => c.classList.remove('operations__content--active'));

    clicked.classList.add('operations__tab--active');

    // activate content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`)
                            .classList.add('operations__content--active');
   
})

//////////////////////////MENU FADE ANIMATION///////////////////////////
const nav = document.querySelector('.nav');

const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblings.forEach(el =>  {
            if (el !== link) {
                el.style.opacity = this;
            }
        });
        logo.style.opacity = this;
    }
};
// nav.addEventListener('mouseover', function (e) {handleHover(e, .5);});
//Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//////////////////////STICKY NAVIGATION///////////////////////////////
/*const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function (e) {
    console.log(window.scrollY);

    if(this.window.scrollY > initialCoords.top) {
        nav.classList.add('sticky');
    }
});
*/
//////////////////////STICKY NAVIGATION: INTERSECTION OBSERVER API/////////////
/*const obsCallback = function (entries, observer) {
    entries.forEach(entry => console.log(entry));
};

const obsOptions = {
    root: null,
    threshold: [0, .2],
}

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);
*/

const header = document.querySelector('header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
    const [entry] = entries; //= entry = entries[0] destructuring
    //console.log(entry);
    if (!entry.isIntersecting) {
        nav.classList.add('sticky');
    }
    else {
        nav.classList.remove('sticky');
    }
};

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);
const menuBurger = document.querySelector('.header__icon');
const menuAppendix = document.querySelector('.header__menu-appendix');
const menu = document.querySelector('.header__menu');
const body = document.querySelector('body');
const barrier = document.querySelector('.header-barrier');

menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('header__icon-active');
    menuAppendix.classList.toggle('header__menu-active');
    menu.classList.toggle('header__menu-active');

    body.classList.toggle('no-scroll');
    barrier.classList.toggle('header-barrier-hidden');
})

barrier.addEventListener('click', (e) => {
    menuBurger.classList.toggle('header__icon-active');
    menuAppendix.classList.toggle('header__menu-active');
    menu.classList.toggle('header__menu-active');

    body.classList.toggle('no-scroll');
    barrier.classList.toggle('header-barrier-hidden');
})
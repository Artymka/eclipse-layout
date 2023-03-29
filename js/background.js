const mainBlock = document.querySelector('.main-block');
const preFooter = document.querySelector('.pre-footer');

window.addEventListener('scroll', background);
document.addEventListener('DOMContentLoaded', background);

function background() {
    if (window.pageYOffset <= mainBlock.offsetTop + mainBlock.offsetHeight
        && window.pageYOffset + document.documentElement.clientHeight >= mainBlock.offsetTop) {
        const mainBlockScroll = (mainBlock.offsetTop - window.pageYOffset) / 2;

        const mainBlockBackground = document.querySelector('.main-block__background');
        mainBlockBackground.classList.remove('background-hidden');
        mainBlockBackground.style.transform = 'translate(0px, ' + mainBlockScroll + 'px)';

    } else {
        const mainBlockBackground = document.querySelector('.main-block__background');
        mainBlockBackground.classList.add('background-hidden');
    }

    if (window.pageYOffset <= preFooter.offsetTop + preFooter.offsetHeight
        && window.pageYOffset + document.documentElement.clientHeight >= preFooter.offsetTop) {
        const preFooterScroll = (preFooter.offsetTop - window.pageYOffset) / 2;

        const preFooterBackground = document.querySelector('.pre-footer__background');
        preFooterBackground.classList.remove('background-hidden');
        preFooterBackground.style.transform = 'translate(0px, ' + preFooterScroll + 'px)';

    } else {
        const preFooterBackground = document.querySelector('.pre-footer__background');
        preFooterBackground.classList.add('background-hidden');
    }
}
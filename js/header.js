let headerTop;
window.addEventListener('scroll', header);
document.addEventListener('DOMContentLoaded', header);

function header() {
    const header = document.querySelector('.header');
    if (header.classList.contains('_header-absolute')) {
        headerTop = header.offsetTop;
    }

    const appendix = document.querySelector('.header__menu-appendix');
    if (headerTop <= window.pageYOffset) {
        header.classList.remove('_header-absolute');
        header.classList.add('_header-fixed');
        appendix.classList.add('header__menu-appendix-hidden');

    } else {
        header.classList.remove('_header-fixed');
        header.classList.add('_header-absolute');
        appendix.classList.remove('header__menu-appendix-hidden');
    }
}
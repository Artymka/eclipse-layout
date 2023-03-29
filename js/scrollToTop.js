const scrollButton = document.querySelector('.scroll-to-top-button');

scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

window.addEventListener('scroll', () => {
    const scrollBorder = document.querySelector('.main-block').offsetHeight;

    if (window.pageYOffset >= scrollBorder) {
        scrollButton.classList.add('scroll-to-top-button-active');
    } else {
        scrollButton.classList.remove('scroll-to-top-button-active');
    }
})
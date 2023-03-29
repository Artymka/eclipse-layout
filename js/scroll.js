const scrollArrows = document.querySelectorAll('.scroll-to-arrow');

scrollArrows.forEach(scrollArrow => {
    scrollArrow.addEventListener('click', () => {
        const scroll = scrollArrow.dataset.scroll;
        const scrollElement = document.querySelector(scroll);
        const scrollTo = scrollElement.offsetTop;

        window.scrollTo({
            top: scrollTo,
            behavior: "smooth"
        });
    })
})
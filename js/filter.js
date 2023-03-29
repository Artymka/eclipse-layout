const filterButtons = document.querySelectorAll('.guidelines__filter-button');
const filterSelect = document.querySelector('.guidelines__filter-select');
const filterRow = document.querySelector('.guidelines__filter-row');

filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', () => {
        filterByData(filterButton.dataset['filter']);

        if (filterSelect.style.display === 'none') {
            selectFilterButton(filterButton.dataset['filter']);
        } else {
            filterRow.classList.remove('guidelines__filter-row-active');
            filterSelect.innerText = filterButton.innerText;
        }
    })
})

filterSelect.addEventListener('click', () => {
    filterRow.classList.toggle('guidelines__filter-row-active');

    if (!(filterRow.classList.contains('guidelines__filter-row-active'))) {
        filterSelect.blur();
    }
})

document.addEventListener('click', (e) => {
    if (e.target !== filterSelect) {
        filterRow.classList.remove('guidelines__filter-row-active');
    }
})

filterSelect.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
        filterRow.classList.remove('guidelines__filter-row-active');
    }
})

function filterByData(dataFilter) {
    const filterItems = document.querySelectorAll('.guidelines__item');

    filterItems.forEach((item) => {
        if (item.dataset['filter'] === dataFilter) {
            item.classList.remove('item-hidden');
        } else {
            item.classList.add('item-hidden');
        }
    })
}

function selectFilterButton(dataFilter) {
    filterButtons.forEach((filterButton) => {
        if (filterButton.dataset['filter'] === dataFilter) {
            filterButton.classList.add('selected-filter');
        } else {
            filterButton.classList.remove('selected-filter');
        }
    })
}
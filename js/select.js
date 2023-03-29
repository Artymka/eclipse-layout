document.querySelectorAll('.select-dropdown').forEach(selectDropdown => {
    const pseudoSelect = selectDropdown.querySelector('.pseudo-select');
    const selectList = selectDropdown.querySelector('.select-list');
    const hiddenSelect = selectDropdown.querySelector('.hidden-input');
    const selectItems = selectDropdown.querySelectorAll('.select-item');

    pseudoSelect.addEventListener('click', () => {
        selectList.classList.toggle('select-list-hidden');

        if (selectList.classList.contains('select-list-hidden')) {
            pseudoSelect.blur();
        }
    })

    pseudoSelect.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' || e.key === 'Escape') {
            selectList.classList.add('select-list-hidden');
        }
    })

    selectItems.forEach(selectItem => {
        selectItem.addEventListener('click', () => {
            hiddenSelect.value = selectItem.dataset.value;
            pseudoSelect.innerText = selectItem.innerText;
        })
    })

    document.addEventListener('click', (e) => {
        if (e.target !== pseudoSelect) {
            selectList.classList.add('select-list-hidden');
        }
    })
})
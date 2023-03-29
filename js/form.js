// const submitButton = document.querySelector('.main-block__button');

document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('.main-block__button');
    submitButton.addEventListener('click', submitForm);
})

async function submitForm(e) {
    e.preventDefault();
    console.log('submit');

    let hasErrors = false;

    const hiddenSelect = document.querySelector('.main-block__hidden-input');
    const select = document.querySelector('.main-block__pseudo-select');
    if (hiddenSelect.value.trim() === '') {
        hasErrors = true;
        select.classList.add('_error');
    } else {
        select.classList.remove('_error');
    }

    const emailInput = document.querySelector('.main-block__input');
    if (!/.+@.+\..+/i.test(emailInput.value)) {
        hasErrors = true;
        emailInput.classList.add('_error');
    } else {
        emailInput.classList.remove('_error');
    }

    if (hasErrors === true) return;

    const form = document.querySelector('.main-block__form-body');
    const response = await fetch('http://eclipse/vendor/registration.php', {
        method: 'POST',
        body: new FormData(form)
    })

    form.reset();
    alert('The form submission is completed!');
}
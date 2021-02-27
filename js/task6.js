const validationInput = document.querySelector('input#validation-input');

const validationInputAttribute = validationInput.getAttribute('data-length');
// console.log(Number(validationInputAttribute));

const onInputChange = (event) => {
    const eventValue = event.currentTarget.value;

    if (eventValue.length === Number(validationInputAttribute)) {
        validationInput.classList.add('valid');
        validationInput.classList.remove('invalid');
    } else {
        validationInput.classList.add('invalid');
        validationInput.classList.remove('valid');
    }


}

validationInput.addEventListener('change', onInputChange);
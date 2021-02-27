const nameInput = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

const onInputChange = (event) => {
    
    const eventValue = event.currentTarget.value;
    
    const blank = (eventValue.length === 0) ?
        nameOutput.textContent = 'незнакомец' :
        nameOutput.textContent = eventValue;


}

nameInput.addEventListener('input', onInputChange);
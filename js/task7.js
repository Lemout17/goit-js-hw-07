const fontSizeControl = document.querySelector('input#font-size-control');
// console.log(fontSizeControl.value);
const inputText = document.querySelector('span#text');


const onInputChange = (event) => {
    inputText.style.fontSize = `${event.currentTarget.value}px`;
}

fontSizeControl.addEventListener('input', onInputChange);
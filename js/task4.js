const counterValue = document.querySelector('span#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let currentCount = 0;

const onDecrementBtnClick = () => {
    currentCount -= 1;
    counterValue.textContent = currentCount;
}

const onIncrementBtnClick = () => {
    currentCount += 1;
    counterValue.textContent = currentCount;
}


// const onDecrementBtnClick = () => {
//     counterValue.textContent -= 1;
// }

// const onIncrementBtnClick = () => {
//     counterValue.textContent = +(counterValue.textContent) + 1;

// }


decrementBtn.addEventListener('click', onDecrementBtnClick);
incrementBtn.addEventListener('click', onIncrementBtnClick);
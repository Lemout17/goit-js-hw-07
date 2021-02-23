const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const listOfItem = array => {
    array.map(element => {
    const tagsRef = document.createElement('li');
    tagsRef.textContent = element;
    ingredientsRef.append(tagsRef);
})
}


// const listOfItem = array => {
//     for (let item of array) {
//     const tagsRef = document.createElement('li');
//     tagsRef.textContent = item;
//     ingredientsRef.appendChild(tagsRef);
// }
// }


// const listOfItem = array => {
//     for (let i = 0; i < array.length; i++) {
//     const tagsRef = document.createElement('li');
//     tagsRef.textContent = array[i];
//     ingredientsRef.appendChild(tagsRef);
// }
// }


listOfItem(ingredients);
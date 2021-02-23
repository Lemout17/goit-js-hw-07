const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsRef = document.querySelector('#ingredients');

const listOfItem = ingredients.map(element => {
    const tagsRef = document.createElement('li');
    tagsRef.textContent = element;
    ingredientsRef.append(tagsRef);
})



// for (let ingridient of ingredients) {
//     const tagsRef = document.createElement('li');
//     tagsRef.textContent = ingridient;
//     ingredientsRef.appendChild(tagsRef);
// }

// for (let i = 0; i < ingredients.length; i++) {
//     const tagsRef = document.createElement('li');
//     tagsRef.textContent = ingredients[i];
//     ingredientsRef.appendChild(tagsRef);
// }
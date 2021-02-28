const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsRef = document.querySelector('#ingredients');

const listOfItem = (array, parent) => {
  const list = array.map(element => {
    let tagList = document.createElement('li')
    tagList.textContent = element;
    return tagList;
  })

  parent.append(...list);
}

listOfItem(ingredients,ingredientsRef);
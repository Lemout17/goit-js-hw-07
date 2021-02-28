
const categoriesChildrenRef = document.querySelectorAll('#categories li.item');
console.log(`В списке ${categoriesChildrenRef.length} категории.`);


const categoriesOfElements = array => {
    array.forEach((element) => console.log(`Категория:` + element.firstElementChild.textContent + `\nКоличество элементов:` + element.lastElementChild.children.length));
}

categoriesOfElements(categoriesChildrenRef);

const categoriesChildrenRef = document.querySelectorAll('#categories li.item');
console.log(`В списке ${categoriesChildrenRef.length} категории.`);

categoriesChildrenRef.forEach((el) => console.log(`Категория:` + el.firstElementChild.textContent + `\nКоличество элементов:` + el.lastElementChild.children.length));



const categoriesChildrenRef = document.querySelectorAll('#categories li.item');
console.log(`В списке ${categoriesChildrenRef.length} категории.`);


const categoriesOfElements = array => {
    array.forEach((element) => console.log(`Категория:` + element.firstElementChild.textContent + `\nКоличество элементов:` + element.lastElementChild.children.length));
}

// const categoriesOfElements = array => {
//     for (let element of array) {
//        console.log(`Категория:` + element.firstElementChild.textContent + `\nКоличество элементов:` + element.lastElementChild.children.length);
//    }
// }

// const categoriesOfElements = array => {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`Категория:` + array[i].firstElementChild.textContent + `\nКоличество элементов:` + array[i].lastElementChild.children.length)
//     }
// }


categoriesOfElements(categoriesChildrenRef);
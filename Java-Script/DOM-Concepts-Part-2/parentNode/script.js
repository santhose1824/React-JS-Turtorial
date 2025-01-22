// Select alist item using data-item

const selectedElement = document.querySelector('[data-item="fruit"]');
console.log(selectedElement);

const parentListItem=selectedElement.parentNode;
console.log(parentListItem);


const grandParentElement = parentListItem.parentNode;
console.log(grandParentElement);


const firstElement = grandParentElement.parentNode;
console.log(firstElement);



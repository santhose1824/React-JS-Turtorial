// Creating the array


let fruits = ['apples','banana','mango','grapes'];
console.log(fruits);


// Array Methods

// 1)Push

fruits.push('pinaple');
console.log(fruits);

// 2)Accessing Array

let accesingArray = fruits[4];
console.log(accesingArray);


// 3)Removing last element pop

let books =['Story Books','Accademic Books','Managa','Physcology Books'];
console.log(books);

books.pop();
console.log(books);


// 4) Shift Removing first element
books.shift();
console.log(books);


// 5)unshift Add elements in the begining


books.unshift('Story Books','Technology Books','Economic Books');
console.log(books);


// 6)concat

const colors1 = ['red','blue'];
const colors2=['green','yellow'];

const allColors = colors1.concat(colors2);
console.log(allColors);


// 7)slice

const techComponaies =['Google','Apple','Microsoft','Linux','Facebook','Netflix','Amazon'];
console.log(techComponaies);


const selectedCompanies = techComponaies.slice(0,6);
console.log(selectedCompanies);


// 8)length
console.log("No.of TechCompanies");
console.log(techComponaies.length);
console.log("No.of Books");
console.log(books.length);
console.log("No.of Fruits");
console.log(fruits.length);
console.log("No.of Colors");
console.log(allColors.length);










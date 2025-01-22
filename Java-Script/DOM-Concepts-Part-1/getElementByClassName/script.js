// Select elements which has className called fiction
const fictionBooksElement = document.getElementsByClassName('fiction');
console.log(fictionBooksElement);

// Selecting all elements with the class name "non-fiction" within the non-fictionSection

const nonFictionSectionnElement = document.getElementById('non-FictionSection');
console.log(nonFictionSectionnElement);

const nonFictionBooks =nonFictionSectionnElement.getElementsByClassName('non-fiction');

console.log(nonFictionBooks[1]);

// Fisrt convert into array


const fictionBooksArr = Array.from(fictionBooksElement);
console.log(fictionBooksArr);

const fictionBooksElementTitle = fictionBooksArr.map(el=>el.innerHTML);
console.log(fictionBooksElementTitle);







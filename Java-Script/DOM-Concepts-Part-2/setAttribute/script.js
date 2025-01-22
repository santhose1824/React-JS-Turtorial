const product1Element = document.getElementById("product1").querySelector("img");

console.log(product1Element);


product1Element.setAttribute(
    "src",
    "https://cdn.pixabay.com/photo/2019/01/18/20/08/heart-3940561_640.jpg"
);

product1Element.setAttribute(
    "alt",
    "my-new-product"
);


const product1LinkElement = document.getElementById("product1").querySelector("a");


product1LinkElement.setAttribute('href',"new.html");

console.log(product1LinkElement);




// slelcting all product cards


const productCardsElement = document.querySelectorAll('.product-card');
console.log(productCardsElement);


// Extract Product Name


const productnamesElement = document.querySelectorAll('.product-name');
console.log(productnamesElement);
productnamesElement.forEach((el)=>{
  console.log(el.innerHTML);
});


const laptopPriceElement = document.querySelectorAll("[data-category = 'laptop'] .product-price");
console.log(laptopPriceElement);

laptopPriceElement.forEach((el)=>{
    console.log(el.innerHTML);
});

const ratingProduct = document.
querySelectorAll("[data-rating = '4.7'],[data-rating = '4.8']");

console.log(ratingProduct);

ratingProduct.forEach((el)=>{
    console.log(el.innerHTML);
});


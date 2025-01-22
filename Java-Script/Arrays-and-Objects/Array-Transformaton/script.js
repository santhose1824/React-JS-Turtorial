//  For Each

let numbers =[1,2,3,4,5,6,7,8,9,10];

const newNumbers=numbers.forEach((number)=>{
    const doubled = number*2;
    console.log(doubled);
});

console.log(newNumbers);



// Array of Objects

const products =[
    {
        product:'Laptop',
        stock:'10'
    },
    {
        product:'Mobile Phones',
        stock:'15'
    },
    {
        product:'Tablet',
        stock:'12'
    },
];

products.forEach((singleProduct)=>{
  console.log(`Product:${singleProduct.product},Stock:${singleProduct.stock}`);
});




// map()

let Numbers =[1,2,3,4,5,6,7,8,9,10];


const Doubled=Numbers.map((num)=>{
    const result = num*2;
    return result;
});
console.log(Numbers);
console.log(Doubled);



const Products =[
    {
        product:'Laptop',
        stock:'10',
        price:1000
    },
    {
        product:'Mobile Phones',
        stock:'15',
        price:100
    },
    {
        product:'Tablet',
        stock:'12',
        price:300
    },
];

//  Apply 10% discount


const discountedPrices=Products.map((products)=>{
    return{
        name:products.name,
        stock:products.stock,
        price:products.price*0.9
    }
});

console.log(discountedPrices);



// reduce

const totalSum=numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue
},10);

console.log(totalSum);



const totalInventoryValues =  Products.reduce((accumulator,product)=>{
    return accumulator+(product.stock*product.price);
},0);

console.log(totalInventoryValues);


// find()

const foundNumber=numbers.find((num)=>{
    return num>3;
});

console.log(foundNumber);


const foundNumberUsingFliter=numbers.filter((num)=>{
   return num>3;
});
console.log(foundNumberUsingFliter);







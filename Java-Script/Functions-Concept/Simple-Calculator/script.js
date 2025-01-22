// Simple Calculator

function addtion(a,b){
  let result = a+b
  return result
}
console.log(addtion(10,40));

const subtraction=(a,b)=>{
    let result = a-b
    return result
}
console.log(subtraction(40,10));

const multiplication = function(a,b){
    let result = a*b
    return result
}
console.log(multiplication(10,20));

(function(a,b){
  let result = a/b
  console.log(result);
})(20,10);
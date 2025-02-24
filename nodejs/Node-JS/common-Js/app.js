const utils  = require('./utils');

console.log("App Started .....")
//! Single Function Exports
// console.log(utils("Santhose"));

//! Object Export
// const{add,subtract} = utils
// console.log(add(20,40));
// console.log(subtract(200,40));

//! Named Functions Export
const{sayHai,goodBye} = utils;
console.log(sayHai("Santhose H.M"));
console.log(goodBye("Santhose H.M"));


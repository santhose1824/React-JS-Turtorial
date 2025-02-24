//! Single Function Export

// const firstName = "Santhose"
// const greet = (name)=>{
//     return `Hello, ${name}`
// }
// module.exports = greet;


//! Object Export
function add (a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
// module.exports ={
//     "add":add ,
//     "subtract":sub
// }


//! Named Functions export

// module.exports.sayHai=(name)=>{
//     return(`Hi,${name}`);
// }

// module.exports.goodBye = (name)=>{
//     return(`Good Bye,${name}`)
// }

//! using exports shortHand

exports.sayHai=(name)=>{
    return(`Hi,${name}`);
}

exports.goodBye = (name)=>{
    return(`Good Bye,${name}`)
}
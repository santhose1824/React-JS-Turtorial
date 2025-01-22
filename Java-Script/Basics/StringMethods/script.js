//  Creating string


let singleQuoteString = 'Hello'

console.log(singleQuoteString);


let dobuleQuoteString ="Hello World"

console.log(dobuleQuoteString)

let templateLiteral =`Hello jbngnogvobinnfnifdgntrhnnoiengiunr
jkfjgkgfmhmgmnopgh
`

console.log(templateLiteral)


// String length

console.log(singleQuoteString.length);

// Accessing Characters index from 0 to n-1
console.log(singleQuoteString[4]);

//  UpperCase

console.log(singleQuoteString.toUpperCase());

// LowerCase
console.log(singleQuoteString.toLowerCase());

// indexof()


console.log(singleQuoteString.indexOf('World'));


// slice

console.log(singleQuoteString.slice(1,5));

// Replcae

console.log(dobuleQuoteString.replace('World','Developer'));


// Concat

console.log(dobuleQuoteString.concat(" ",singleQuoteString));
console.log(dobuleQuoteString+" "+singleQuoteString);

// Template literals

let name = "John"

let age = 21

let greeting =`Hello ${name} your ${age}, good morning`

console.log(greeting);










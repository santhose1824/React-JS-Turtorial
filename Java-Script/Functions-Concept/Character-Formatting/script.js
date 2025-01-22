const characterFormatting=(text,concatString,wordToFind)=>{
   let lengthOfText = text.length
   let lowerCaseConversion = text.toLowerCase()
   let upperCaseConversion = text.toUpperCase()
   let indexOfWord = text.indexOf('Hello')
   let stringConcat = text.concat(" "+concatString)
   return [lengthOfText,lowerCaseConversion,upperCaseConversion,indexOfWord,stringConcat]
}

console.log(
    characterFormatting(
    `Hello,This is Santhose `,
    `I amd Full Stack Software Developer`,
    'Hello'
    )
);

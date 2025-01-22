const languageProfficencyElement =document.getElementsByName('languageProfficency');
console.log(languageProfficencyElement);
// Loop through node list to find selected radio
function collectData(){
    for(let i =0;i<languageProfficencyElement.length;i++){
        if(languageProfficencyElement[i].checked){
               console.log(`Selected Language is : ${languageProfficencyElement[i].value}`);
        }
    }
}

const emailElement = document.getElementsByName('email');
console.log(emailElement);





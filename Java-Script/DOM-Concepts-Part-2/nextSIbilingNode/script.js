const containerElement = document.getElementById("container");
console.log(containerElement);


const allButtonElements = document.querySelectorAll('button');
console.log(allButtonElements);

allButtonElements.forEach((element)=>{
    const nextElement = element.nextSibling;
    if(nextElement.nodeType===3 && nextElement){
        nextElement.textContent="The changed Text";
    }
});


const btn1Element = document.getElementById("btn1");
const btn2Element = document.getElementById("btn2");


const btn1Previous=btn1Element.previousSibling;
console.log(btn1Previous);

const btn2Previous=btn2Element.previousSibling;
console.log(btn2Previous);



if(btn1Previous.nodeType ===3){
    btn1Previous.textContent="Text1 is changed";
}

if(btn2Previous.nodeType ===3){
    btn2Previous.textContent="Text2 is changed";
}
const increaseElement = document.getElementById('increase');
const decreaseElement = document.getElementById('decrease');
const resetElement = document.getElementById('reset');

const resultElement = document.getElementById('result');

let finalReasult = 0;

resultElement.innerHTML=`<h3>${finalReasult}</h3>`;


increaseElement.addEventListener('click',()=>{
    finalReasult=finalReasult+1;
    resultElement.innerHTML=`<h3>${finalReasult}</h3>`;
});

decreaseElement.addEventListener('click',()=>{
    finalReasult=finalReasult-1;
    if(finalReasult<0){
        alert('The counter reach its minimum limit');
    }
    else{
        resultElement.innerHTML=`<h3>${finalReasult}</h3>`;
    }
});

resetElement.addEventListener('click',()=>{
    finalReasult=0;
    resultElement.innerHTML=`<h3>${finalReasult}</h3>`;
});


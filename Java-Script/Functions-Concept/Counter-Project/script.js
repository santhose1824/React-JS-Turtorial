let count = 0
const increaseElemnet = document.querySelector('.btn1')
const decreaseElement = document.querySelector('.btn2')
const increaseBy10Element = document.querySelector('.increaseby10')
const reseElementBtn = document.querySelector('.reset')
const numberElement = document.querySelector('.number')
increaseBy10Element.addEventListener('click',()=>{
    count+=10
    numberElement.innerHTML= `<h1>${count}</h1>`
})

increaseElemnet.addEventListener('click',()=>{
   count+=1
   numberElement.innerHTML= `<h1>${count}</h1>`
})

decreaseElement.addEventListener('click',()=>{
    count-= 1
    numberElement.innerHTML= `<h1>${count}</h1>`
})

reseElementBtn.addEventListener('click',()=>{
    count=0
    numberElement.innerHTML= `<h1>${count}</h1>`
})
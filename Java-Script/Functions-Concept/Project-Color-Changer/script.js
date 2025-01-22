const btn1Element = document.querySelector('.btn1')
const btn2Element = document.querySelector('.btn2')
const resetElement = document.querySelector('.reset')
const titleElement = document.querySelector('.title')
const bodyElemnt = document.querySelector('body')
//  Add Event Listenser

// 2 Aruments click and function
btn1Element.addEventListener('click',function(){
   bodyElemnt.style.backgroundColor ='yellow'
})

btn2Element.addEventListener('click',()=>{
   titleElement.style.fontSize ='50px'
})

resetElement.addEventListener('click',()=>{
   bodyElemnt.style.backgroundColor=''
   titleElement.style.fontSize='30px'
})




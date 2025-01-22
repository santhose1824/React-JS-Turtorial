function addFruit(name){
    const ulEl =document.getElementById("fruitsList");
    const li = document.createElement('li');
    li.className='fruit';
    li.textContent= name;
    ulEl.appendChild(li);
    console.log(ulEl);
}

addFruit("Apple");
addFruit("Mango");
addFruit("Orange");
addFruit("Banana");


function removeFruit(name){
    const ulEl =document.getElementById("fruitsList");
    let fruitFound = false;
    for(const li of ulEl.children){
        console.log(li);
        if(li.textContent==name){
            fruitFound= true;
            ulEl.removeChild(li);
        }
    }
}


removeFruit("Mango");
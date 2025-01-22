const butttonElement = document.getElementById('check-btn');

butttonElement.addEventListener('click',function(){
    const ageElement = document.getElementById('age');
    const resultElement = document.getElementById('result');
    console.log("Printed");
    const age = parseInt(ageElement.value);
    if(age>=18){
        resultElement.innerHTML = '<h3>You are eligible for vote,drink and drive</h3>'
        console.log("something");
    }
    else{
        resultElement.innerHTML = '<h3>You are not eligible for vote,drink and drive</h3>'
        console.log("Noting");
    }
});



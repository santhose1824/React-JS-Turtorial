let btn = document.getElementById("addButton");
let result = document.getElementById("result");
btn.addEventListener('click',function(){
    let inputNum1 = document.getElementById('num1').value;
    let inputNum2 = document.getElementById('num2').value;
    sum = parseFloat(inputNum1)+parseFloat(inputNum2);
    result.innerHTML = '<i class="fas fa-equals icon"></i>'+sum;
});


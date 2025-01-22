const calculateBtn = document.getElementById("calculateBtn");
const numberInput = document.getElementById("number");
const percentInput = document.getElementById("percent");
const percentageResult = document.getElementById("percentageResult");
const finalResult = document.getElementById("finalResult");


function calculate(){
    const numValue = parseFloat(numberInput.value);
    const precentageValue = parseFloat(percentInput.value);

    if(isNaN(numValue)||isNaN(precentageValue)){
        alert("Please enter valid Number");
        return;
    }

    const result = (numValue*precentageValue)/100;

    const final = numValue*result;

    percentageResult.textContent=formatCurrency(result);

    finalResult.textContent=formatCurrency(final);
}

// format the currency

function formatCurrency(amount) {
    return "$" + amount.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}


calculateBtn.addEventListener('click',calculate);

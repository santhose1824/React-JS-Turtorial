const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', function () {
    const number1Element = document.getElementsByClassName('number1')[0];
    const number2Element = document.getElementsByClassName('number2')[0];
    const dropDown = document.getElementsByClassName('dropDown')[0];
    const selectedOption = dropDown.options[dropDown.selectedIndex];
    const resultElement = document.getElementsByClassName('result')[0];

    let num1 = parseInt(number1Element.value);
    let num2 = parseInt(number2Element.value);
    let selectedValue = selectedOption.value;

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.innerHTML = `<h2>Please enter valid numbers</h2>`;
        return;
    }

    let result;
    switch (selectedValue) {
        case "Add":
            result = num1 + num2;
            break;
        case "Sub":
            result = num1 - num2;
            break;
        case "Multi":
            result = num1 * num2;
            break;
        case "Div":
            if (num2 === 0) {
                resultElement.innerHTML = `<h2>Division by zero is not allowed</h2>`;
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultElement.innerHTML = `<h2>Please select a valid operation</h2>`;
            return;
    }

    resultElement.innerHTML = `<h2>Result is ${result}</h2>`;
});

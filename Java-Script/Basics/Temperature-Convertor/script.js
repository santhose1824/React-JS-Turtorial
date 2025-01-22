const buttonElement = document.querySelector("#convert-btn");
buttonElement.addEventListener("click", function () {
  const temperatureElement = document.querySelector("#temp");
  const selectedElement = document.querySelector("#dropDown");
  const resultElement = document.querySelector("#result");

  console.log("SOmething");

  const temperature = parseFloat(temperatureElement.value);
  selectedOption = selectedElement.options
  [selectedElement.selectedIndex];
  const selectedValue = selectedOption.value
  console.log(selectedValue);
  if(selectedValue=='Celcius'){
    let convertedValue = ((5/9)*35)*(temperature);
    resultElement.innerHTML=`<h3>The Celcius is ${convertedValue}</h3>`
  }
  else if(selectedValue=='Farienhet'){
    let convertedValue = ((9/5)*35)*(temperature);
    resultElement.innerHTML=`<h3>The Farienhet is ${convertedValue}</h3>`
  }
  else{
    resultElement.innerHTML='<h3>Please Select the any of the option</h3>'
  }
});

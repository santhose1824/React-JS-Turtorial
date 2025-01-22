const bmiCalculator=(height,weight)=>{
  let bmi = weight/(height*height)
  let staus;
  if(bmi<18.5){
    staus= "Under Weight"
  }
  else if(bmi<24.9){
    staus ="Normal Weight"
  }
  else if(bmi<29.9){
    staus="Over Weight"
  }
  else{
    staus="Obesity"
  }
  return staus
}

console.log(bmiCalculator(1.75,90))
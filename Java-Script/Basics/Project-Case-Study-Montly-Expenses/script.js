
let MonthlyIncome = 3000
let Rent = 1200
let Groceries = 600
let Utlities = 300
let Entertaiment =200


let MonthlyExpenses = Rent+Groceries+Utlities+Entertaiment
console.log("My Monthly Expenses :",MonthlyExpenses);


let MonthlySavings = MonthlyIncome-MonthlyExpenses;
console.log("My Monthly Savings :",MonthlySavings);


let MonthlyPercentageofIncomeSpent = ((MonthlyExpenses/MonthlyIncome)*100).toFixed(2)
console.log("My Monthly SPending percentage is:",MonthlyPercentageofIncomeSpent);



document.addEventListener('DOMContentLoaded',()=>{
    const calculateBtnElement = document.getElementById('calculateBtn');
    const amountElement = document.getElementById('amount');
    const intrestElement = document.getElementById('interest');
    const yearsElement = document.getElementById('years');
    const monthlyElement = document.getElementById('monthly');
    const totalPayment = document.getElementById('total');
    const totalInterestPayment = document.getElementById('totalInterest');


    // Function to calculate loan

    function calculateLoan(){
        const principal = parseFloat(amountElement.value);
        const interest = parseFloat(intrestElement.value)/100/12;
        const payments = parseFloat(yearsElement.value)*12;
        if(isNaN(principal)||isNaN(interest)||isNaN(payments)){
            alert('Please enter valid inputs');
        }
        // calculate montly payment
        const x = Math.pow(1+interest,payments);
        const monthly = (principal*x*interest)/(x-1);

        if(isFinite(monthly)){
            // calc total payment and interest
            const total = monthly *payments;
            const totalInterest = total-principal;

            monthlyElement.textContent=monthly;
            totalPayment.textContent = total;
            totalInterestPayment.textContent = totalInterest

            animation(monthlyElement,0,monthly,1000);
            animation(totalPayment,0,monthly,1000);
            animation(totalInterestPayment,0,monthly,1000);
        }
    }


    // animation

    function animation(element,start,end,duration){
        const statTime = performance.now();
        function update(currentTime){
            const elapsed = currentTime-statTime;
            const progress = Math.min(elapsed/duration,1);
            const current = start+(end-start)*progress;

            element.textContent=current
        }
        if(progress<1){
            requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }


    calculateBtnElement.addEventListener('click',calculateLoan);
});






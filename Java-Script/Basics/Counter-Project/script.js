const buttonElement = document.getElementById('btn');

buttonElement.addEventListener('click', function () {
    const secondsElement = document.getElementById('sec');
    const resultElement = document.getElementById('result');

    let seconds = parseInt(secondsElement.value);
    console.log(seconds);

    for (let i = seconds; i >= 0; i--) {
        setTimeout(function () {
            resultElement.innerHTML = `<h2>${i} seconds left</h2>`;
            console.log(i);
            if (i === 0) {
                resultElement.innerHTML = '<h2>Time\'s Up!!</h2>';
            }
        }, (seconds - i) * 1000);
    }
});

const randomNumber = Math.floor(Math.random()*(10-0)+0);
const feedbackElement = document.getElementById('feedback');

const GuessBttonElement = document.getElementById("btn");
let userGess;
GuessBttonElement.addEventListener('click',function(){
  userGess= parseInt(document.getElementById('guess').value);
  guessCheck();

});

function guessCheck(){
    while(userGess!==randomNumber){
        if(userGess<randomNumber){
            feedbackElement.textContent="Too low !,Try Again"
        }
        else if(userGess>randomNumber){
            feedbackElement.textContent="Too high Try Again"
        }
        return;
    }
    feedbackElement.textContent="Number is Correct"
}



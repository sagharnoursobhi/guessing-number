

let secretNumber = Math.trunc(Math.random() * 20) + 1;//0<number<20
let score = 20;
document.querySelector('.check-btn').addEventListener(('click'), () => {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = '⛔️No Number!'
    }//when there is no input!
    else if(guess === secretNumber){
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = '☺️Congradulation!You won the game!'
        document.querySelector('body').style.backgroundColor = 'rgb(17, 156, 17)';
        document.querySelector('.container').style.backgroundColor = 'rgb(17, 156, 17)';
    }//when the player wins the game!
    else if(guess > secretNumber){
        if(score>1){
            document.querySelector('.message').textContent = '📈Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = '😢You lost The Game!'
        }
        
    }//when guess is too high!
    else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉Too low!'
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = '😢 You lost The Game!'
            document.querySelector('.score').textContent = 0;
        }
    }//when the guessn is too low!
})

document.querySelector('.again').addEventListener('click' , ()=>{
    secretNumber = Math.trunc(Math.random() * 20) + 1;//0<number<20
    score = 20;
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('.container').style.backgroundColor = 'black';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.score').textContent = score;
    document.querySelector('.left-input').value = '';
    document.querySelector('.message').textContent = 'Start guessing';
} )
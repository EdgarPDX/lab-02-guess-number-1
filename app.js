// import functions and grab DOM elements
import { compareNumbers } from './guess-utils.js';

const myButton = document.querySelector('#button');
const numGuess = document.querySelector('#num-guess');
const resultSpan = document.getElementById('result');


// initialize state
let count = 1;
let remaining = 3;
let correctNumber = Math.ceil(Math.random() * 20);
let gameEnded = false;

console.log(correctNumber, count, remaining);

// set event listeners to update state and DOM


myButton.addEventListener('click', () =>{
    if (!gameEnded){
    
        const guess = Number(numGuess.value);
        let firstguess = compareNumbers(guess, correctNumber);
    
        if (firstguess === 0){
            
            console.log(correctNumber, count, remaining);
            resultSpan.textContent = 'you got it! the correct number was ' + correctNumber;
            myButton.textContent = 'good job';
            
            myButton.disabled = true;
            gameEnded = true;
        
        } else if (firstguess === -1){
            
            
            
            resultSpan.textContent = 'too low, try again.  You have ' + remaining + ' guesses remaining ';
            myButton.textContent= "Try again";
            remaining --;
            
            if (count === 4) gameEnded = true;
            count++;
            console.log(correctNumber, count, remaining);
        } else if (firstguess === 1){
            
            
            
            resultSpan.textContent = 'Too high, try again.  You have ' + remaining + ' guesses remaining ';
            myButton.textContent= "Try again";
            remaining --;
            
            if (count === 4) gameEnded = true;
            count++;
            console.log(correctNumber, count, remaining);
  
        }
    } else {
        resultSpan.textContent = 'You have reached your limit. The number was ' + correctNumber + '.  Better luck next time!';
        myButton.textContent = 'Sorry Loser';
        gameEnded = true;
    }

});

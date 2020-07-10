// import functions and grab DOM elements
import { compareNumbers } from './guess-utils.js';

const myButton = document.querySelector('#button');
const numGuess = document.querySelector('#num-guess');
const resultSpan = document.getElementById('result');
const pictureSpan = document.getElementById('picture');
const funSpan = document.getElementById('fun');


// initialize state
let count = 1;
let remaining = 4;
let correctNumber = Math.ceil(Math.random() * 20);


//console.log(correctNumber, count, remaining);

// set event listeners to update state and DOM


myButton.addEventListener('click', () =>{
    if (count < 4) {
    
// Declaring the variable to pass the guessed number to the function
// Calling function 
        const guess = Number(numGuess.value);
        let firstguess = compareNumbers(guess, correctNumber);
    
        if (firstguess === 0){
            
            //console.log(correctNumber, count, remaining);
            resultSpan.textContent = 'You got it! the correct number was ' + correctNumber + '. You got it in ' + count + ' tries!';
            myButton.textContent = 'good job';
            pictureSpan.textContent = 'Very Very Very proud of you';
            funSpan.textContent = 'That was fun, was\t it?';
            myButton.disabled = true;
           
        
        } else if (firstguess === -1){
            
            
            
            resultSpan.textContent = 'Too low, try again.  You have ' + remaining + ' guesses remaining ';
            myButton.textContent = 'Try again';
            
            
            if (count === 4);
            remaining --;
            count++;
            //console.log(count, remaining);
        } else if (firstguess === 1){
            
            
            
            resultSpan.textContent = 'Too high, try again.  You have ' + remaining + ' guesses remaining ';
            myButton.textContent = 'Try again';
            
            
            if (count === 4);
            count++;
            remaining --;
            //console.log(count, remaining);
  
        }
    } else {
        resultSpan.textContent = 'You have reached your limit. The number was ' + correctNumber + '.  Better luck next time!';
        myButton.textContent = 'You Didnt win';
        pictureSpan.textContent = 'So very very very disappointed';
        funSpan.textContent = 'That was fun, was it not?';
       
    
    }

});

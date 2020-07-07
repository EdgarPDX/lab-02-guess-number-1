// import functions and grab DOM elements
import { compareNumbers } from './guess-utils.js';

const myButton = document.querySelector('#button');
const numGuess = document.querySelector('#num-guess');


// initialize state
let count = 0;
let remaining = 4;
let correctNumber = Math.ceil(Math.random() * 20);

console.log(correctNumber,count,remaining);

// set event listeners to update state and DOM


myButton.addEventListener('click', () =>{
    const guess=numGuess.value;
    let firstguess =compareNumbers(guess, correctNumber);
   
    if (firstguess === 0){
        console.log('you got it!')
        console.log(correctNumber,count,remaining);

    }else if (firstguess === -1){
        console.log('too low, try again');
        count++;
        remaining --;
        console.log(correctNumber,count,remaining);
    }else if (firstguess === 1){
        console.log('too high try again')
    }
    count++;
    remaining --;
    console.log(correctNumber,count,remaining);



   
});
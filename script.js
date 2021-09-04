'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!'

// //   windows+.

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
let score = 20;
let highSc = 0;

let bool = false;

let someFun = function () {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    bool = false;
}


// document.querySelector('.check').addEventListener('click', function(){
//     console.log(document.querySelector('.guess').value);
// });
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!bool) {
        if (!guess) {
            document.querySelector('.message').textContent = 'No number!🙄'
        } else if (guess === secretNumber && score > 0) {
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.message').textContent = '🎉 Correct Number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (score > highSc) {
                highSc = score;
                document.querySelector('.highscore').textContent = highSc;
            }
            bool = true;

        } else if (score > 1) {
            document.querySelector('.message').textContent = (guess > secretNumber) ? '📈 Too high!' : '📉 Too low!';
            document.querySelector('.score').textContent = --score;
        } else {
            document.querySelector('.message').textContent = '😶 You lost the game!';
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
});


// document.querySelector('.again').addEventListener('click', function () {
//     score = 20;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('body').style.backgroundColor = '#222';
//     document.querySelector('.number').textContent = '?';
//     document.querySelector('.message').textContent = 'Start guessing...';
//     document.querySelector('.number').style.width = '15rem';
//     document.querySelector('.guess').value = '';
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     bool = false;
// });
document.querySelector('.again').addEventListener('click', function () {
    someFun();
});
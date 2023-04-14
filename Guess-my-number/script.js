'use strict';

// // Create random number
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// // Declare the score
// let score = 20;

// //Declare the highscore
// let highscore = 0;

// // Check the input value and change the score/messages on these instances
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   // No input
//   if (!guess) {
//     document.querySelector('.message').textContent = 'No number !';
//   }
//   // Correct input
//   else if (guess === secretNumber) {
//     // Display the correct number
//     document.querySelector('.number').textContent = secretNumber;

//     document.querySelector('.message').textContent = 'Correct Number !';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     // Show highscore
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//   }
//   // Input too high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Number is too high !';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game !';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   // Input too low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'Number is too low !';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'You lost the game !';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

// // Reset the game
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   // Create a new secret number and reassign the value
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   //   Reset text
//   document.querySelector('.message').textContent = 'Start guessing...';
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   // Empty input value
//   document.querySelector('.guess').value = '';
//   // Reset CSS
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';
// });
// FIRST CODE - SEE IF WE CAN MAKE IT BETTER
// --------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------
// Refactoring Code - DRY Principle ( DO NOT REPEAT YOURSELF )

// Create a function so we do not repeat the code, we just call the function with the value we want
// No input message = the message shown in the class="message"
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Create random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Declare the score
let score = 20;

//Declare the highscore
let highscore = 0;

// Check the input value and change the score/messages on these instances
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input
  if (!guess) {
    displayMessage('No number !');
  }
  // Correct input
  else if (guess === secretNumber) {
    // Display the correct number
    document.querySelector('.number').textContent = secretNumber;

    displayMessage('Correct Number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Show highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //   This is changed
  //   Different input
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Number is too high !' : 'Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  // Create a new secret number and reassign the value
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   Reset text
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  // Empty input value
  document.querySelector('.guess').value = '';
  // Reset CSS
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

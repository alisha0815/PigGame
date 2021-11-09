'use strict';

// Setting up the starting condition
// Initialize the score setting to 0 using ID

// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Ele = document.querySelector('#current--0');
const current1Ele = document.querySelector('#current--1');
let currentScore = 0; // initialize current score
// total score, storing in an array
const scores = [0, 0];
// keep track of the active player
let activePlayer = 0; // we start with player #1

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0; //JS will automatically convert them to strings to actually display them on the page
// console.log(score0);
// console.log(score1);

// Hide the dice here
// Create a hidden class (CSS) and then add that hidden
diceEl.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  // console.log(diceEl.src);
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    // console.log(currentScore);
    // building id name dynamically!
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    console.log(currentScore);
    // current0Ele.textContent = currentScore; // Change later
  } else {
    // previous players current score set to be visibly 0
    currentScore = 0;
    // reset the current score
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    // If true, switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    // change background color of the active player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

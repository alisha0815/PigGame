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
let playing = true;

// Switch to the next player
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0; //JS will automatically convert them to strings to actually display them on the page
// console.log(score0);
// console.log(score1);

// Hide the dice here
// Create a hidden class (CSS) and then add that hidden

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // when playing is true
  if (playing) {
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
      switchPlayer();
    }
  }
});

// Holding the current score
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // console.log('current', `player ${activePlayer}`, currentScore);
    // display the global score
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      // Make the dice hidden
      diceEl.classList.add('hidden');
      // console.log(`💯💯 Player ${activePlayer + 1} won!`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// Resetting the game
btnNew.addEventListener('click', function () {
  console.log('all reset');
  // remove the winner class
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  // set all the scores back to 0
  // total score set back to 0
  scores[0] = 0;
  scores[1] = 0;
  console.log(scores); // total scores set to 0
  // display total scores
  document.getElementById('score--0').textContent = scores[0];
  document.getElementById('score--1').textContent = scores[1];
  // current scores set back to 0
  current0Ele.textContent = 0;
  current1Ele.textContent = 0;
  // displaying active player (player1)
  document.querySelector('.player--0').classList.add('player--active');
  // activating all the buttons
  playing = true;
});

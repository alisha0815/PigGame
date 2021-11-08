'use strict';

// Setting up the starting condition
// Initialize the score setting to 0 using ID

// Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0; //JS will automatically convert them to strings to actually display them on the page
// console.log(score0);
// console.log(score1);

// Hide the dice here
// Create a hidden class (CSS) and then add that hidden
diceEl.classList.add('hidden');

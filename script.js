'use strict';
// player player--0 player--active
// name

// current
// current-label
// current-score
// dice
// btn
// btn--new
// btn--roll
// btn--hold

// Selecting Elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

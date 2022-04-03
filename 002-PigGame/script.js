'use strict';
// Selecting Elements
const diceEl = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1Score = document.querySelector('#score--0');
const player2Score = document.querySelector('#score--1');
const player1Current = document.querySelector('#current--0');
const player2Current = document.querySelector('#current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
// Inıtıal Values
let counter = 0;
const players = [
  [player1Score, player1Current, player1],
  [player2Score, player2Current, player2],
];
let currentPlayer = players[counter % 2];
let gameEnd = false;
let currentScore = 0;
let totalScore = 0;
// Rolling Dice Function
const rollingDice = function () {
  if (!gameEnd) {
    let number = Math.trunc(((Math.random() * 10) % 6) + 1);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${number}.png`;
    currentScore = Number(currentPlayer[1].textContent);
    currentScore += number;
    currentPlayer[1].textContent = currentScore;
    if (number === 1) {
      currentPlayer[1].textContent = 0;
      currentScore = 0;
      switchPlayer();
    }
  }
};
// Hold Score Function
const holdScore = function () {
  if (!gameEnd) {
    totalScore = Number(currentPlayer[0].textContent);
    totalScore += currentScore;
    currentPlayer[0].textContent = totalScore;
    currentScore = 0;
    currentPlayer[1].textContent = 0;
    // Winner
    if (Number(currentPlayer[0].textContent) >= 100) {
      currentPlayer[2].classList.add('player--winner');
      diceEl.classList.add('hidden');
      gameEnd = true;
    }
    switchPlayer();
  }
};
// Switch Player
const switchPlayer = function () {
  counter++;
  currentPlayer = players[counter % 2];
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};
// New Game Function
// Starting condition fuction
const newGame = function () {
  player1Score.textContent = 0;
  player2Score.textContent = 0;
  player1Current.textContent = 0;
  player2Current.textContent = 0;
  diceEl.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  counter = 0;
  gameEnd = false;
  currentPlayer = players[counter % 2];
  gameEnd = false;
  currentScore = 0;
  totalScore = 0;
};
// Button Events
btnRoll.addEventListener('click', rollingDice);
btnHold.addEventListener('click', holdScore);
btnNew.addEventListener('click', newGame);
newGame();

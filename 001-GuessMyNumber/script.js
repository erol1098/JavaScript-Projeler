'use strict';
let score = 20;
let highscore = 0;
let myNumber = Math.trunc(Math.random() * 20) + 1;

const gameMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const gameScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const gameNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const checkButtonClick = function () {
  const guess = Number(document.querySelector('.guess').value);
  if (score > 1) {
    if (!guess) {
      gameMessage('🛑 Only Number');
    } else if (guess === myNumber) {
      gameMessage('🎉 Correct Number');
      gameScore(score - 1);
      if (score > highscore) {
        document.querySelector('.highscore').textContent = highscore = score;
      }
      gameNumber(myNumber);
      document.querySelector('body').style.backgroundColor = '#60b347';
    } else if (guess !== myNumber) {
      score--;
      gameMessage(guess > myNumber ? '👎 A Bit Lower ' : '👍 A Bit Higher ');
      gameScore(score);
    }
  } else {
    gameNumber(myNumber);
    gameScore(0);
    gameMessage('You Have Lost!');
  }
};
const againButtonClick = function () {
  score = 20;
  myNumber = Math.trunc(Math.random() * 20) + 1;
  gameMessage('Start guessing...');
  gameNumber('?');
  gameScore(20);
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
};

document.querySelector('.check').addEventListener('click', checkButtonClick);
document.querySelector('.again').addEventListener('click', againButtonClick);

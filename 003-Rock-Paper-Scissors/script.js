"use strict";
const playerAnswer = document.querySelector(".player");
const randomAnswer = document.querySelector(".random");
const rockBtn = document.querySelector("#btn--1");
const paperBtn = document.querySelector("#btn--2");
const scissorsBtn = document.querySelector("#btn--3");
const result = document.querySelector(".result");

const getAnswer = function (id) {
  if (id === "btn--1") playerAnswer.textContent = "ROCK";
  else if (id === "btn--2") playerAnswer.textContent = "PAPER";
  else if (id === "btn--3") playerAnswer.textContent = "SCISSORS";

  const random = Math.trunc(((Math.random() * 10) % 3) + 1);
  if (random === 1) randomAnswer.textContent = "ROCK";
  else if (random === 2) randomAnswer.textContent = "PAPER";
  else if (random === 3) randomAnswer.textContent = "SCISSORS";

  gameResult(playerAnswer.textContent, randomAnswer.textContent);
};

const gameResult = function (player, random) {
  if (player === "ROCK" && random === "ROCK") result.textContent = "DRAW";
  else if (player === "ROCK" && random === "PAPER") result.textContent = "LOST";
  else if (player === "ROCK" && random === "SCISSORS")
    result.textContent = "WIN";

  if (player === "PAPER" && random === "ROCK") result.textContent = "WIN";
  else if (player === "PAPER" && random === "PAPER")
    result.textContent = "DRAW";
  else if (player === "PAPER" && random === "SCISSORS")
    result.textContent = "LOST";

  if (player === "SCISSORS" && random === "ROCK") result.textContent = "LOST";
  else if (player === "SCISSORS" && random === "PAPER")
    result.textContent = "WIN";
  else if (player === "SCISSORS" && random === "SCISSORS")
    result.textContent = "DRAW";
};

rockBtn.addEventListener("click", getAnswer);
paperBtn.addEventListener("click", getAnswer);
scissorsBtn.addEventListener("click", getAnswer);

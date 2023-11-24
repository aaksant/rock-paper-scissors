const choice = ['rock', 'paper', 'scissors'];

const getComputerSelection = () => {
  return choice[Math.floor(Math.random() * choice.length)];
};

let playerScore = document.querySelector('.player-score');
let compScore = document.querySelector('.comp-score');

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

const rockText = rockButton.textContent.toLowerCase();
const paperText = paperButton.textContent.toLowerCase();
const scissorsText = scissorsButton.textContent.toLowerCase();

const condition = document.querySelector('.condition');
const selections = document.querySelector('.selections');

rockButton.addEventListener('click', () => {
  let playerNewScore = Number(playerScore.textContent);
  let compNewScore = Number(compScore.textContent);

  if (rockText === getComputerSelection()) {
    condition.textContent = 'draw';
    selections.textContent = `both pick ${rockText}`;
  } else if (getComputerSelection() !== 'paper') {
    playerNewScore++;
    playerScore = playerNewScore;
    condition.textContent = 'you win';
    selections.textContent = `rock beats ${getComputerSelection()}`;
  }
});

paperButton.addEventListener('click', () => {
  let playerNewScore = Number(playerScore.textContent);
  let compNewScore = Number(compScore.textContent);


});
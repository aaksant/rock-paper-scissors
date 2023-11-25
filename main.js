const choice = ['rock', 'paper', 'scissors'];

function getComputerSelection() {
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
  const compSelection = getComputerSelection();

  if (rockText === compSelection) {
    condition.textContent = 'draw';
    selections.textContent = `both pick ${rockText}`;
  } else if (compSelection !== 'paper') {
    playerNewScore++;
    playerScore.textContent = playerNewScore;
    condition.textContent = 'you win';
    selections.textContent = `rock beats ${compSelection}`;
  } else {
    compNewScore++;
    compScore.textContent = compNewScore;
    condition.textContent = 'you lose';
    selections.textContent = `${compSelection} beats rock`
  }
});

paperButton.addEventListener('click', () => {
  let playerNewScore = Number(playerScore.textContent);
  let compNewScore = Number(compScore.textContent);
  const compSelection = getComputerSelection();

  if (paperText === compSelection) {
    condition.textContent = 'draw';
    selections.textContent = `both pick ${paperText}`;
  } else if (compSelection !== 'scissors') {
    playerNewScore++;
    playerScore.textContent = playerNewScore;
    condition.textContent = 'you win';
    selections.textContent = `paper beats ${compSelection}`;
  } else {
    compNewScore++;
    compScore.textContent = compNewScore;
    condition.textContent = 'you lose';
    selections.textContent = `${compSelection} beats paper`
  }
});

scissorsButton.addEventListener('click', () => {
  let playerNewScore = Number(playerScore.textContent);
  let compNewScore = Number(compScore.textContent);
  const compSelection = getComputerSelection();

  if (scissorsText === compSelection) {
    condition.textContent = 'draw';
    selections.textContent = `both pick ${scissorsText}`;
  } else if (compSelection !== 'rock') {
    playerNewScore++;
    playerScore.textContent = playerNewScore;
    condition.textContent = 'you win';
    selections.textContent = `scissors beats ${compSelection}`;
  } else {
    compNewScore++;
    compScore.textContent = compNewScore;
    condition.textContent = 'you lose';
    selections.textContent = `${compSelection} beats scissors`
  }
});
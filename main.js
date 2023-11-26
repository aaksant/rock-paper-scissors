const choice = ['rock', 'paper', 'scissors'];

function getComputerSelection() {
  return choice[Math.floor(Math.random() * choice.length)];
}

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
const final = document.querySelector('.final');

let playerNewScore = Number(playerScore.textContent);
let compNewScore = Number(compScore.textContent);

const maxAttempts = 10;
let attempt = 0;

function updateAttempt() {
  attempt++;
  if (attempt === maxAttempts + 1) {
    rockButton.removeEventListener('click', rockButtonHandler);
    paperButton.removeEventListener('click', paperButtonHandler);
    scissorsButton.removeEventListener('click', scissorsButtonHander);
  }
}

function reset() {
  attempt = 0;
  rockButton.addEventListener('click', rockButtonHandler);
  paperButton.addEventListener('click', paperButtonHandler);
  scissorsButton.addEventListener('click', scissorsButtonHander);

  playerNewScore = 0;
  compNewScore = 0;
  playerScore.textContent = '0';
  compScore.textContent = '0';
  condition.textContent = '';
  selections.textContent = '';
  final.textContent = '';
}

function checkWinner(playerScore, compScore) {
  if (attempt === maxAttempts + 1) {
    if (playerScore > compScore) {
      condition.textContent = '';
      selections.textContent = '';
      final.textContent = 'you win!';
    } else {
      condition.textContent = '';
      selections.textContent = '';
      final.textContent = 'you lose!';
    }
    reset();
  }
}

function rockButtonHandler() {
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
      selections.textContent = `${compSelection} beats rock`;
    }

    updateAttempt();
    checkWinner(playerNewScore, compNewScore);
}

function paperButtonHandler() {
    const compSelection = getComputerSelection();

    if (paperText === compSelection) {
      condition.textContent = "draw";
      selections.textContent = `both pick ${paperText}`;
    } else if (compSelection !== "scissors") {
      playerNewScore++;
      playerScore.textContent = playerNewScore;
      condition.textContent = "you win";
      selections.textContent = `paper beats ${compSelection}`;
    } else {
      compNewScore++;
      compScore.textContent = compNewScore;
      condition.textContent = "you lose";
      selections.textContent = `${compSelection} beats paper`;
    }

    updateAttempt();
    checkWinner(playerNewScore, compNewScore);
}

function scissorsButtonHander() {
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
      selections.textContent = `${compSelection} beats scissors`;
    }

    updateAttempt();
    checkWinner(playerNewScore, compNewScore);
}

rockButton.addEventListener('click', rockButtonHandler);
paperButton.addEventListener('click', paperButtonHandler);
scissorsButton.addEventListener('click', scissorsButtonHander);
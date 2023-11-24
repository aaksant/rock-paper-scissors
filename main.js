const choice = ['rock', 'paper', 'scissors'];

function getComputerSelection() {
  return choice[Math.floor(Math.random() * choice.length)];
};
const compSelection = getComputerSelection();

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

  if (rockText === compSelection) {
    console.log(rockText);
    console.log(compSelection);
    condition.textContent = 'draw';
    selections.textContent = `both pick ${rockText}`;
  } else if (compSelection !== 'paper') {
    console.log(rockText);
    console.log(compSelection);
    playerNewScore++;
    playerScore = playerNewScore;
    condition.textContent = 'you win';
    selections.textContent = `rock beats ${compSelection}`;
  }
});

paperButton.addEventListener('click', () => {
  let playerNewScore = Number(playerScore.textContent);
  let compNewScore = Number(compScore.textContent);


});
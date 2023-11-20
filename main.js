const choice = ["rock", "paper", "scissors"];

function getComputerSelection() {
  return choice[Math.floor(Math.random() * choice.length)];
}

function playGame(totalAttempts) {  
  let playerWinCount = 0;
  let computerWinCount = 0;
  let attemptsLeft = 0;

  while (attemptsLeft < totalAttempts) {
    const playerSelection = prompt('Enter your choice').toLowerCase();
    const computerSelection = getComputerSelection();

    if (playerSelection === computerSelection) {
      console.log("Draw");
      attemptsLeft++;
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
      console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
      playerWinCount++;
      console.log(`${playerWinCount} : ${computerWinCount}`);
      attemptsLeft++;
    } else if (playerSelection === "rock" && computerSelection !== "scissors") {
      console.log(
        `Computer wins: ${computerSelection} beats ${playerSelection}`
      );
      computerWinCount++;
      console.log(`${playerWinCount} : ${computerWinCount}`);
      attemptsLeft++;
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
      console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
      playerWinCount++;
      console.log(`${playerWinCount} : ${computerWinCount}`);
      attemptsLeft++;
    } else if (playerSelection === "paper" && computerSelection !== "rock") {
      console.log(
        `Computer wins: ${computerSelection} beats ${playerSelection}`
      );
      computerWinCount++;
      console.log(`${playerWinCount} : ${computerWinCount}`);
      attemptsLeft++;
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
      console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
      playerWinCount++;
      console.log(`${playerWinCount} : ${computerWinCount}`);
      attemptsLeft++;
    } else if (playerSelection === "scissors" && computerSelection !== "paper") {
      console.log(
        `Computer wins: ${computerSelection} beats ${playerSelection}`
      );
      computerWinCount++;
      console.log(`${playerWinCount} : ${computerWinCount}`);
      attemptsLeft++;
    }
  }
}

playGame(5)
function getComputerSelection() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function playRound(playerSelection, computerSelection) {
  let playerWinCount = 0;
  let computerWinCount = 0;

  if (playerSelection === computerSelection) {
    console.log("Draw");
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
    playerWinCount++;
    console.log(`${playerWinCount} : ${computerWinCount}`);
  } else if (playerSelection === "rock" && computerSelection !== "scissors") {
    console.log(`Computer wins: ${computerSelection} beats ${playerSelection}`);
    computerWinCount++;
    console.log(`${playerWinCount} : ${computerWinCount}`);
  }

  if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
    playerWinCount++;
    console.log(`${playerWinCount} : ${computerWinCount}`);
  } else if (playerSelection === "paper" && computerSelection !== "rock") {
    console.log(`Computer wins: ${computerSelection} beats ${playerSelection}`);
    computerWinCount++;
    console.log(`${playerWinCount} : ${computerWinCount}`);
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
    playerWinCount++;
    console.log(`${playerWinCount} : ${computerWinCount}`);
  } else if (playerSelection === "scissors" && computerSelection !== "paper") {
    console.log(`Computer wins: ${computerSelection} beats ${playerSelection}`);
    computerWinCount++;
    console.log(`${playerWinCount} : ${computerWinCount}`);
  }
}

function game(liveCount) {
  let currentLive = 0;
  while (currentLive < liveCount) {
    const playerSelection = prompt("Enter your choice").toLowerCase();
    const computerSelection = getComputerSelection();
    playRound(playerSelection, computerSelection);
    
    currentLive++;
  }
}

game(5);
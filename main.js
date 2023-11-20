const choice = ["rock", "paper", "scissors"];

function getComputerSelection() {
  return choice[Math.floor(Math.random() * choice.length)];
}

function playGame(totalAttempts) {
  let playerScore = 0;
  let computerScore = 0;
  let attemptsLeft = 0;

  console.log(`You have ${totalAttempts} attempts.`)

  while (attemptsLeft < totalAttempts) {
    const playerSelection = prompt("Enter your choice").toLowerCase();
    const computerSelection = getComputerSelection();

    if (playerSelection === computerSelection) {
      console.log("Draw")
    } 
    
    else if (playerSelection === 'rock') {
      if (computerSelection !== 'paper') {
        console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`${playerScore} : ${computerScore}`);
        attemptsLeft++;
      } else {
        console.log(`Computer wins: ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        console.log(`${playerScore} : ${computerScore}`);
        attemptsLeft++
      }
    } 

    else if (playerSelection === 'paper') {
      if (computerSelection !== 'scissors') {
        console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`${playerScore} : ${computerScore}`);
        attemptsLeft++;
      } else {
        console.log(`Computer wins: ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        console.log(`${playerScore} : ${computerScore}`);
        attemptsLeft++
      }
    }

    else if (playerSelection === 'scissors') {
      if (computerSelection !== 'rock') {
        console.log(`Player wins: ${playerSelection} beats ${computerSelection}`);
        playerScore++;
        console.log(`${playerScore} : ${computerScore}`);
        attemptsLeft++;
      } else {
        console.log(`Computer wins: ${computerSelection} beats ${playerSelection}`);
        computerScore++;
        console.log(`${playerScore} : ${computerScore}`);
        attemptsLeft++
      }
    }

    else {
      console.log('Invalid choice.')
      continue;
    }
  }

  if (playerScore == computerScore) {
    console.log("Draw, what a boring game.");
  } else if (playerScore > computerScore) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}

playGame(5);
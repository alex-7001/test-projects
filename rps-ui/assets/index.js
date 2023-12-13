function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice == 0) {
    choice = "rock";
  } else if (choice == 1) {
    choice = "paper";
  } else {
    choice = "scissors";
  }
  return choice;
}

function playRound(playerSelection, computerSelection){
  if (playerSelection == "rock" && computerSelection == "rock") {
    return "It's a tie! Rock vs. Rock";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "It's a tie! Paper vs. Paper";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "It's a tie! Scissors vs. Scissors";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You won! Rock beats Scissors!";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You won! Paper beats Rock!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You won! Scissors beats Paper!";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats Rock!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beats paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats Scissors";
  }
}
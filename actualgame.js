let choices = ['rock', 'paper', 'scissors'];
let round = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random()*choices.length);
  return choices[randomNumber];
}


function playGame(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return "You win! Rock beats scissors!";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "You win! Paper beats rock!";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "You win! Scissors beats paper!";
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') {
    return "You lose! Rock beats scissors!";
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    return "You lose! Paper beats rock!";
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    return "You lose! Scissors beats paper!";
} else {
  return 'It is a tie!';
}
}

// if/else statement that sets up the main logic of the game

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i=0; i < 5; i++) {

    const playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    const computerSelection = computerPlay();
    console.log(`Computer played "${computerSelection}"`);
    const consoleOutput = playGame(playerSelection, computerSelection);
    console.log(consoleOutput);

    if (consoleOutput.includes("win", 3)) {
      ++playerScore;
    }else {
      ++computerScore;
    }
  }

  if (playerScore < computerScore){
    console.log("You lose the game.");
  } else if (playerScore > computerScore) {
    console.log("You win the game");
  } else {
    console.log("You are tied");
  }
  }
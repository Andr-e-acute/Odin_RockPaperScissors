let computerScore = 0;
let playerScore = 0;
const choicesString = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choicesString) {
  let randomIndex = Math.floor(Math.random() * choicesString.length);
  return choicesString[randomIndex];
}


function userInput(choicesString) {
  const rawInput = prompt("Choose Rock Paper or Scissors");
  //convert user Input to first letter capitalized rest lowerCase
  let formatInput = rawInput
    .toLocaleLowerCase()
    .trim()
    .replace(/(^\w)/, (firstLetter) => firstLetter.toUpperCase());

  if (!choicesString.includes(formatInput)) {
    alert(`"${rawInput}" is not an allowed Input! 
    You can only choose between Rock Paper or Scissors`);
    return userInput(choicesString);
  }
  return formatInput;
}

//compare the choices
function playRound(playerSelection, computerSelection) {
  let message = "empty";

  if (playerSelection === computerSelection) {
    message = `Draw! You chose ${playerSelection}, the computer also chose ${computerSelection}`;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;
    message = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;
    message = `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;
    message = `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    message = `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
  console.log(computerScore);
  console.log(message);
}


function game() {
  const choicesString = ["Rock", "Paper", "Scissors"];

  for (let index = 0; index < 5; index++) {
    const playerSelection = userInput(choicesString);
    const computerSelection = getComputerChoice(choicesString);
    playRound(playerSelection, computerSelection);

  }

  let resultMessage;
  if (computerScore === playerScore) {
    resultMessage = `Draw! 
    Computer scored:${computerScore} 
    You scored:${playerScore}`;
  } else if (playerScore > computerScore) {
    resultMessage = `You win this Round! 
    Computer scored:${computerScore} 
    You scored:${playerScore}`;
  } else if (playerScore < computerScore) {
    resultMessage = `You lost this Round! 
                    Computer scored:${computerScore} 
                    You scored:${playerScore}`;
  }
  console.log(resultMessage);
  computerScore = 0;
  playerScore = 0;
}
game();


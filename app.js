let computerScore = Number(document.querySelector("#computerScore").textContent);;
let playerScore = Number(document.querySelector("#playerScore").textContent);
let message = document.querySelector("#message").textContent


const choicesString = ["Rock", "Paper", "Scissors"];
const choicesContainer=document.querySelector('#choicesContainer');
const rounds=5;


function playRound(e) {
  let computerSelection = getComputerChoice(choicesString);
  let playerSelection = this.textContent;
  
  
  if (playerSelection === computerSelection) {
    message = `Draw! 
    You chose ${playerSelection}, the computer also chose ${computerSelection}`;
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
  updateInfos();
  checkWin();
  
}
function getComputerChoice(choicesString) {
  let randomIndex = Math.floor(Math.random() * choicesString.length);
  return choicesString[randomIndex];
}
//update the DOM and the variables 
function updateInfos(){
  document.querySelector("#playerScore").textContent=playerScore;
  document.querySelector("#message").textContent=message;
  document.querySelector("#computerScore").textContent=computerScore;
}
//show win Message
//TODO reset function
function checkWin(){
  if(playerScore >=5){
    message=`You WIN!! you scored first 5 points`;
  }
  else if(computerScore >=5){
    message =`You lose!! computer scored  first 5 poinst`
  }
  //reset function
  updateInfos();

}


// create buttons and eventListeners
choicesString.forEach((choice)=>{
  const button= document.createElement('button');
  button.textContent= choice;
  button.addEventListener('click',playRound)
  choicesContainer.appendChild(button)
})


let computerScore ;
let playerScore;
let message ;
const choicesString = ["Rock", "Paper", "Scissors"];
const choicesContainer=document.querySelector('#choicesContainer');
const rounds=5;


startGame();


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
function checkWin(){
  if(playerScore>=5||computerScore >=5){
  if(playerScore >=5){
    message=`You WIN!! you scored first 5 points`;
  }
  else if(computerScore >=5){
    message =`You lose!! computer scored  first 5 points`
  }
  updateInfos()
  resetGame();
  }
}
//reset
function resetGame(){

  //delete allchoiceButtons
const choicesContainer=document.querySelector('#choicesContainer')
while(choicesContainer.firstChild){
  choicesContainer.removeChild(choicesContainer.firstChild)
}

//make a reset Button
resetButton = document.createElement('button')
resetButton.textContent='reset';
resetButton.addEventListener('click',()=>{
choicesContainer.removeChild(resetButton);

startGame();
})
choicesContainer.appendChild(resetButton);

}
// create buttons and eventListeners
function startGame(){
  computerScore=0;
  playerScore=0;
  message='Click to start a game';
  updateInfos();
choicesString.forEach((choice)=>{
  const button= document.createElement('button');
  button.textContent= choice;
  button.addEventListener('click',playRound)
  choicesContainer.appendChild(button)
})}


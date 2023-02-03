let playerScore = document.querySelector(".player")
let computerScore = document.querySelector(".com")
let result = document.querySelector(".result")
let choices = document.querySelectorAll(".choices")
let options = ["ROCK", "PAPER","SCISSORS"];
let player;
let com;

choices.forEach(button => button.addEventListener("click", () => {
   player = button.textContent;
   getComputerChoice();
   playerScore.textContent = `Player score: ${player}`;
   computerScore.textContent = `Com score: ${computerChoice}`;
   result.textContent = playRound();
}));

function getComputerChoice(){
   let option = options[Math.floor(Math.random()*options.length)];
   return option
}
computerChoice = getComputerChoice();

function playRound(){
   if(player === computerChoice){
      return "it's a tie"
   }
   else if((player === "ROCK" && computerChoice === "SCISSORS")||(
      player === "PAPER" && computerChoice === "ROCK")||
      (player === "SCISSORS" && computerChoice === "PAPER"))
      return `you win`
   else if((player === "ROCK" && computerChoice === "PAPER")||
      (player === "PAPER" && computerChoice === "SCISSORS")||
      (player === "SCISSORS" && computerChoice === "ROCK"))
      return "you lose"
}


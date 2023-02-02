let options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

let computerChoice = getComputerChoice();

function playerChoice(){
   let playerOptions = prompt("rock, paper,scissors?").toLowerCase();
   return playerOptions
}
let playerSelection = playerChoice();

let playerScore = 0;
let computerScore = 0;
let round = playerScore + computerScore + 1;

function playRound(playerSelection, computerChoice, playerScore, computerScore, round){

   if(playerSelection === computerChoice){
      return ("it`s tie");
   } 
   else if((playerSelection === "rock" && computerChoice === "scissors") || 
   (playerSelection === "paper" && computerChoice === "rock") ||
   (playerSelection === "scissors" && computerChoice === "paper")
   ){
      ++playerScore;
      return (`you won round ${round} the score is ${playerScore} to ${computerScore}`)
   }
   else if ((playerSelection === "rock" && computerChoice === "paper")||
   (playerSelection === "paper" && computerChoice === "scissors")||
   (playerSelection === " scissors" && computerChoice === "rock")){
      ++computerScore;
      return(`you lost round ${round} the score is ${playerScore} to ${computerScore}`);
   }
   else{
      console.log("invalid input");
   }
      
}
oneRound = playRound(playerSelection, computerChoice, playerScore, computerScore, round)
 function game(oneRound){
   for(let i = 0; i <= 5; i++){

   }
   playerSelection;
   return oneRound;
 }
 console.log(game(oneRound));





























/*  let playerSelection = prompt("rock paper scissors?").toLowerCase();


function playRound(playerSelection, computerChoice){
    
    if(playerSelection === "rock" && computerChoice === "scissors"){
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} you win `)
    }
    else if (playerSelection === "paper" && computerChoice === "rock"){
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} you win `)
    }
    else if (playerSelection === "scissors" && computerChoice === "paper"){
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} you win `)
    }
    else if (playerSelection === "rock" && computerChoice === "paper"){
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} you lose ` )
    }
    else if (playerSelection === "paper" && computerChoice === "scissors"){
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} you lose `)
    }
    else if (playerSelection === "scissors" && computerChoice === "rock"){
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} you lose `)
    }
    else if (playerSelection === "rock" && computerChoice === "rock"){
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} it's a draw `)
    }
    else if (playerSelection === "paper" && computerChoice === "paper"){
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} it's a draw `)
    }
    else if (playerSelection === "scissors" && computerChoice === "scissors"){
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} it's a draw `)
    }
    else{
       return(" invalid input ")
    }
}
let computerScore = 0;
let playerScore = 0;
play = playRound(playerSelection, computerChoice)

function game(play){
    for(let i = 0; i <= 5; i++){
    }
    return playRound(playerSelection, computerChoiceS)

}
console.log(game(play)); */

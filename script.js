let options = ["rock", "paper", "scissors"]

function getComputerChoice(){
    return options[Math.floor(Math.random() * options.length)];
}

let playerSelection = prompt("rock paper scissors?").toLowerCase();
let computerChoice = getComputerChoice();


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
       return(` the computer chose ${computerChoice} and you chose ${playerSelection} you lose `)
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

let round = playRound(playerSelection, computerChoice);

console.log(round);

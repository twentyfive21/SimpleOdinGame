// 
function getComputerChoice () {
    const choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random()*choices.length)];
    return choice;
}

//Write a function that plays a single round //\
function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("Eek! It's a Tie!");
    } else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        console.log("You win! Rock beats Scissors!");
    } else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        console.log("You win! Paper beats Rock!");
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        console.log("You win! Scissors beats Paper! ");
    } else if ((computerSelection === "paper") && (playerSelection === "rock")) {
        console.log("You Lose! Paper beats Rock!");
    } else if ((computerSelection === "scissors") && (playerSelection === "paper")) {
        console.log("You Lose! Scissors beats Paper!");
    } else if ((computerSelection === "rock") && (playerSelection === "scissors")) {
        console.log("You Lose! Rock beats Scissors!");
    }
}

playerSelection = window.prompt("Choose your selection").toLowerCase("");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


// game function to play 5 rounds and declare winner 
// playerSelection = window.prompt("Choose your selection").toLowerCase("");





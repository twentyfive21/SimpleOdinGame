// declaring computer choices //
const choices = ["rock", "paper", "scissors"];

// function randomly chooses item in array //
function getComputerChoice (choices) {
    return choices[Math.floor(Math.random()*choices.length)];
}

//Write a function that plays a single round //
function playRound (playerSelection, computerSelection) {
    playerSelection = prompt("Choose your selection", " ");
    return playerSelection.toLowerCase("");

//compare player selection and computer selection //


}
console.log(playRound(prompt))



// game function to play 5 rounds and declare winner 




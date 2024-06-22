// create a function that'll return a random value between rock paper scissors with the use of one of the built-in function.
function getComputerChoice() {
    const chances = Math.random().toFixed(1);
    // equalize the probability of the three choices
    if(chances <= 0.3) 
        return "rock"
    else if(chances <= 0.6)
        return "paper"
    else if(chances <= 0.9) 
        return "scissors"
}
// create a function that will return a human choice
function getHumanChoice() {
    return prompt("Enter your choice(rock, paper, scissors): ")
}
// create a record that will record the humam or computer score
let humanScore = 0;
let computerScore = 0;

// make the playRound plays in 5 times
function playGame() {
// create playground that'll play single round
function playRound(humanChoice, computerChoice) {
    let user;
    let computer;
    if (humanChoice.toLowerCase() == "rock") {
        user = 1;
    }
    else if(humanChoice.toLowerCase() == "paper") {
        user = 2;
    }
    else if(humanChoice.toLowerCase() == "scissors") {
        user = 3;
    }

    if (computerChoice == "rock") {
        computer = 1;
    }
    else if(computerChoice == "paper") {
        computer = 2;
    }
    else if(computerChoice == "scissors") {
        computer = 3;
    }
    return (user < computer && computer == 2) ? "You lose." : (user < computer && computer == 3 && user == 1) ? "You win." : (user < computer && user == 2) ? "You lose." : (user > computer && user == 2) ? "You win." : (user > computer && computer == 1) ? "You lose." : (user > computer && computer == 2) ? "You win." : (user == computer) ? "Draw" : "Error";
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
console.log(playRound(humanSelection, computerSelection));
if(playRound(humanSelection, computerSelection) == "You lose.") {
    ++computerScore;
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
} 
else if(playRound(humanSelection, computerSelection) == "Draw"){
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}
else if(playRound(humanSelection, computerSelection) == "You win."){
    ++humanScore;
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
}
else {
    console.log("Error.")
}

}
let play = 1;
while(play <= 5) {
    playGame();
    play++;
}
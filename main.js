// create a function that'll return a random value between rock paper scissors with the use of one of the built-in function.
function getComputerChoice() {
    // equalize the probability of the three choices
    if(Math.random().toFixed(1) <= 0.3) 
        return "rock"
    else if(Math.random().toFixed(1) <= 0.6)
        return "paper"
    else if(Math.random().toFixed(1) <= 0.9) 
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
    if (humanChoice.toLowerCase() == "rock") {
        if(computerChoice == "rock")
            return "Draw."

        else if(computerChoice == "paper") {
            return "Computer wins."
            computerScore++
        } 
        else if(computerChoice == "scisssors") {
            return "You win! Rock beats scissors."
            humanScore++
        }
    }
    else if(humanChoice.toLowerCase() == "paper") {
        if(computerChoice == "rock") {
            return "You win! Paper beats rock."
            humanScore++
        }
        else if(computerChoice == "paper")
            return "Draw."
        else if(computerChoice == "scisssors") {
            return "Computer wins."
            computerScore++
        }
    }
    else if(humanChoice.toLowerCase() == "scissors") {
        if(computerChoice == "rock"){
            return "Computer wins."
            computerScore++
        }
        else if(computerChoice == "paper"){
            return "You win! Scissors beats paper."
            humanScore++
        }
        else if(computerChoice == "scisssors")
            return "Draw."
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
console.log("Your score: " + humanScore);
console.log("Computer score: " + computerScore);
}
let play = 1;
while(play <= 5) {
    playGame();
    play++;
}
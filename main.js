// create a function that'll return a random value between rock paper scissors with the use of one of the built-in function.
function getComputerChoice() {
    // equalize the probability of the three choices
    if(Math.random().toFixed(1) <= 0.3) 
        return "rock"
    else if(Math.random().toFixed(1) <= 0.6)
        return "paper"
    else return "scissors"
}
console.log(getComputerChoice());
// create a function that will return a human choice
function getHumanChoice() {
    return prompt("Enter your choice(rock, paper, scissors): ")
}
console.log(getHumanChoice());
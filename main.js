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
// Reference for the div.changes
const body = document.querySelector("body");
const container = document.querySelector("div");
const stats = document.querySelector("#STATS");

// after creating buttons this section is for the interactivity of the buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

//scoreStats
let manScore = 0;
let comScore = 0;
let round = 1;
// create playground that'll play single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const Computer = document.createElement("p");
    body.insertBefore(Computer, stats);
    Computer.textContent = computerChoice;
    const outcome = document.createElement("p");
    container.insertBefore(outcome, container.firstChild);
    const userScore = document.createElement("p");
    container.appendChild(userScore);
    const clientScore = document.createElement("p");
    container.appendChild(clientScore);
    const overallWinner = document.createElement("h3");
    container.appendChild(overallWinner);

    const result = (humanChoice.toLowerCase() === computerChoice) ? "Draw." :
    (humanChoice.toLowerCase() === "rock" && 
    computerChoice === "paper") ? "You lose." :
    (humanChoice.toLowerCase() === "rock" &&
    computerChoice === "scissors") ? "You win." :
    (humanChoice.toLowerCase() === "paper" &&
    computerChoice === "rock") ? "You win." :
    (humanChoice.toLowerCase() === "paper" &&
    computerChoice === "scissors") ? "You lose." :
    (humanChoice.toLowerCase() === "scissors" &&
    computerChoice === "rock") ? "You lose." :
    (humanChoice.toLowerCase() === "scissors" && 
    computerChoice === "paper") ? "You win." : "Error";

    outcome.textContent = `Round ${round}: ${result}`;

    function records() {
        if (result === "You win.") {
            manScore++;
        }
        else if (result === "You lose.") {
            comScore++;
        }
        else if (result === "Draw.") {
            manScore += 0.5;
            comScore += 0.5;
        } else {
            return "ERROR!" 
        }
    }
    records();

    userScore.textContent = `Round ${round}: Your score: ${manScore}` ;
    clientScore.textContent = `Round ${round}: Computer score: ${comScore}`;

    function limit() {
        overallWinner.textContent = (manScore < comScore) ?
                                    "Computer Wins!" :
                                    (manScore > comScore) ?
                                    "You Win!!! Congrats!":
                                    "Draw. Better luch next time.";
        manScore = 0;
        comScore = 0;
    }
    round++;

    if (manScore + comScore == 5) {
        limit();
    }
}


// Problem: when you click the button it should call the function 'playRound'
// with the specific value of humanSelection.
/* Understanding: when you click the referred element the parameter that it 
 * gives to the function is the click if you ever wondered use event.type */
// understanding with the help of ai that when you click some button it 
// should call on a function that will process the outcome.

rockBtn.addEventListener('click', () => {
    playRound("rock");
});
paperBtn.addEventListener('click', () => {
    playRound("paper");
});
scissorsBtn.addEventListener('click', () => {
    playRound("scissors");
});



let userScore = 0;
let computerScore = 0;

const options = ["rock", "paper", "scissors"]

function addUserScore(){
    userScore++;
}

function addComputerScore(){
    computerScore++;
}

function checkWinner(userScore, computerScore){
    if(userScore > computerScore){
        return console.log("Final Winner: User")
    } else if (userScore == computerScore){
        return console.log("Final Winner: It's a tie!")
    } else {
        return console.log("Final Winner: Computer")
    }
}

// Function to randomly return rock, paper, or scissors for the computers choice
const getComputerChoice = () => {
    let choice = 0;
    choice = Math.floor(Math.random() * 3)
    return options[choice]
}

// Function to play one round
function playRound(playerSelection, computerSelection) {
    // Take player selection and make it all lowercase
    playerSelection = playerSelection.toLowerCase();

    // End of round messages
    const win = `You win! You picked ${playerSelection} and the computer picked ${computerSelection}.`
    const lose = `You lose! You picked ${playerSelection} and the computer picked ${computerSelection}.`
    const tie = `It's a tie! You picked ${playerSelection} and the computer picked ${computerSelection}.`
    let result = "";

    // Check to see if the choice is valid
    if (!options.includes(playerSelection)){
        return "Please make a valid selection."
    }
    // Conditionals for winning
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper"){
        result = win;
        addUserScore();
        // If they have the same choice return a tie
    } else if (playerSelection == computerSelection ){
        result = tie;
    } else {
        // If its not a win or a tie, its a lose
        result = lose;
        addComputerScore();
    }

    return result;
  }

function playGame() {
    
    for(let i = 0;i < 5;i++){
        const playerSelection = prompt("Rock, paper, or scissors?");
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection));

        console.log(`SCORES (Round ${i + 1} of 5):
        YOU: ${userScore}
        COMPUTER: ${computerScore}`)
    }

    checkWinner(userScore,computerScore);
}
//Select div with id of main
const mainDiv = document.querySelector("#main")

//Create 3 buttons
const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

//Change names for each button
rockBtn.textContent = "Rock";
paperBtn.textContent = "Paper";
scissorsBtn.textContent = "Scissors";

//Attach buttons to div with id of main
mainDiv.append(rockBtn, paperBtn, scissorsBtn);

console.log(playGame());
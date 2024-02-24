let userScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

const options = ["rock", "paper", "scissors"]

function addUserScore(){
    return userScore++;
}

function addComputerScore(){
    return computerScore++;
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

const getComputerChoice = () => {
    let choice = 0;
    choice = Math.floor(Math.random() * 3)
    return options[choice]
}

function playRound(playerSelection, computerSelection) {

    const win = `You win! You picked ${playerSelection} and the computer picked ${computerSelection}.`
    const lose = `You lose! You picked ${playerSelection} and the computer picked ${computerSelection}.`
    const tie = `It's a tie! You picked ${playerSelection} and the computer picked ${computerSelection}.`
    let result = "";

    // Conditionals for winning
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper"){
        result = win;
        addUserScore();
    } else if (playerSelection == computerSelection ){
        result = tie;
    } else {
        result = lose;
        addComputerScore();
    }

    return result;
  }

function playGame() {
        console.log(playRound(playerSelection, computerSelection));

        console.log(`SCORES:
        YOU: ${userScore}
        COMPUTER: ${computerScore}`)

    checkWinner(userScore,computerScore);
}

const mainDiv = document.querySelector("#main")

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.textContent = "Rock";
rockBtn.classList.add("btn");
paperBtn.textContent = "Paper";
paperBtn.classList.add("btn");
scissorsBtn.textContent = "Scissors";
scissorsBtn.classList.add("btn");

mainDiv.append(rockBtn, paperBtn, scissorsBtn);

const buttons = document.querySelectorAll(".btn")
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playerSelection = e.target.innerHTML.toLowerCase();
        computerSelection = getComputerChoice();
        return console.log(playGame())
    })
})

const scoreDiv = document.querySelector("#score");

const displayUserScore = document.createElement("span");
const displayComputerScore = document.createElement("span");
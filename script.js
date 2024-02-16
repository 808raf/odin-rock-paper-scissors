// Function to randomly return rock, paper, or scissors for the computers choice

const options = ["rock", "paper", "scissors"]

const getComputerChoice = () => {
    let choice = 0;
    choice = Math.floor(Math.random() * 3)
    return options[choice]
}

// Function to play one round

function playRound(playerSelection, computerSelection) {
    // End of round messages
    const win = `You win! You picked ${playerSelection} and the computer picked ${computerSelection}.`
    const lose = `You lose! You picked ${playerSelection} and the computer picked ${computerSelection}.`
    const tie = `It's a tie! You picked ${playerSelection} and the computer picked ${computerSelection}.`

    // Take player selection and make it all lowercase
    playerSelection.toLowerCase();
    // Conditionals for winning
    if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper"){
        return win;
        // If they have the same choice return a tie
    } else if (playerSelection == computerSelection ){
        return tie;
    } else {
        // If its not a win or a tie, its a lose
        return lose;
    }
  }
  
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
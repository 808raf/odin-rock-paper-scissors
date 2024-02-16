// Function to randomly return rock, paper, or scissors for the computers choice

const options = ["Rock", "Paper", "Scissors"]

const getComputerChoice = () => {
    let choice = 0;
    choice = Math.floor(Math.random() * 3)
    return options[choice]
}
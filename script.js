function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Enter a choice: Rock, Paper, or Scissors").toLowerCase().trim();
    while (choice != "rock" && choice != "paper" && choice != "scissors") {
        choice = prompt("Please enter a valid option: Rock, Paper, or Scissors").toLowerCase().trim();
    }
    return choice;
}   

function playRound(humanChoice, computerChoice) {

}

function playGame() {

}

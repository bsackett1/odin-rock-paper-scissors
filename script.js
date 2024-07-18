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
        choice = prompt("Please enter a valid option: 'Rock', 'Paper', or 'Scissors'").toLowerCase().trim();
    }
    return choice;
}   

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/* This function accepts strings such "rock", "paper", or "scissors".
    Returns 1 if human wins, -1 if computer wins, or 0 for tie
*/
function playRound(humanChoice, computerChoice) {
    console.assert(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors",
        `Human choice is invalid: ${humanChoice}`
    );
    console.assert(computerChoice == "rock" || computerChoice == "paper" || computerChoice == "scissors",
        `Computer choice is invalid: ${computerChoice}`
    );

    const choiceBeatsMap = new Map();
    choiceBeatsMap.set("rock", "scissors");
    choiceBeatsMap.set("paper", "rock");
    choiceBeatsMap.set("scissors", "paper");
    console.log(`Human Choice: ${humanChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);

    if (choiceBeatsMap.get(humanChoice) == computerChoice) {
        console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`);
        return 1
    } else if (choiceBeatsMap.get(computerChoice) == humanChoice) {
        console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`);
        return -1
    } 
    console.log("You tie this round");
    return 0
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    console.log("========= START GAME =========");
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        let result = playRound(getHumanChoice(), getComputerChoice());
        if (result == 1) {
            humanScore++;
        } else if (result == -1) {
            computerScore++;
        }
        console.log(
        `Round ${i + 1} Over` +
        `\n \tHuman score: ${humanScore}` +
        `\n \tComputer score: ${computerScore}` +
        `\n==========================`);
    }

    console.log("========== END GAME ==========");
    let resultMessage;
    if(humanScore > computerScore) {
        resultMessage = "Congrats! You win!";
    } else if (humanScore < computerScore) {
        resultMessage = "Sorry, you lose :(";
    } else {
        resultMessage = "Game tied!";
    }
    console.log(resultMessage + ` Human score: ${humanScore} | Computer score: ${computerScore}`);
    return;
}

playGame();
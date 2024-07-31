function getComputerChoice () {
  let choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function capitalize (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/* This function accepts strings such "rock", "paper", or "scissors".
    Returns 1 if human wins, -1 if computer wins, or 0 for tie
*/
function playRound (humanChoice, computerChoice) {
  document.querySelector(
    '#human-choice'
  ).textContent = `Human Choice: ${humanChoice}`

  document.querySelector(
    '#computer-choice'
  ).textContent = `Computer Choice: ${computerChoice}`

  const roundResultNode = document.querySelector('#round-result')
  const winner = getRoundWinner(humanChoice, computerChoice)
  let message = ''
  if (winner === 'human') {
    humanScore++
    message = `You win this round! ${capitalize(
      humanChoice
    )} beats ${capitalize(computerChoice)}`
  } else if (winner === 'computer') {
    computerScore++
    message = `You lose this round! ${capitalize(
      computerChoice
    )} beats ${capitalize(humanChoice)}`
  } else {
    message = 'You tie this round'
  }
  roundResultNode.textContent = message

  document.querySelector(
    '#score'
  ).textContent = `Human score: ${humanScore} | Computer score: ${computerScore}`

  let gameResult = document.querySelector('#game-result')
  if (humanScore == 5 || computerScore == 5) {
    if (humanScore > computerScore) {
      gameResult.textContent = 'Congrats! You win the game!\n'
    } else if (humanScore < computerScore) {
      gameResult.textContent = 'Sorry, you lose the game\n'
    } else {
      gameResult.textContent = 'Game tied!'
    }
    humanScore = 0
    computerScore = 0
  }
}

function getRoundWinner (humanChoice, computerChoice) {
  if (choiceBeatsMap.get(humanChoice) == computerChoice) {
    return 'human'
  } else if (choiceBeatsMap.get(computerChoice) == humanChoice) {
    return 'computer'
  }
  return `tie`
}

const buttons = document.querySelector('#buttons')
buttons.addEventListener('click', e => {
  const target = e.target.id
  switch (target) {
    case 'rock':
    case 'paper':
    case 'scissors':
      playRound(target, getComputerChoice())
      break
  }
})

const choiceBeatsMap = new Map()
choiceBeatsMap.set('rock', 'scissors')
choiceBeatsMap.set('paper', 'rock')
choiceBeatsMap.set('scissors', 'paper')

let humanScore = 0
let computerScore = 0

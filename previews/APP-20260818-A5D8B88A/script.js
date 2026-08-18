const choices = ['rock', 'paper', 'scissors'];
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('reset-btn');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const drawScoreElement = document.getElementById('draw-score');
const userChoiceDisplay = document.getElementById('user-choice-display');
const computerChoiceDisplay = document.getElementById('computer-choice-display');
const outcomeElement = document.getElementById('outcome');

let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        return 'player';
    }
    
    return 'computer';
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    } else {
        drawScore++;
        drawScoreElement.textContent = drawScore;
    }
}

function displayChoices(playerChoice, computerChoice) {
    userChoiceDisplay.textContent = playerChoice;
    computerChoiceDisplay.textContent = computerChoice;
}

function displayOutcome(winner) {
    if (winner === 'player') {
        outcomeElement.textContent = 'You Win!';
        outcomeElement.style.color = '#2e7d32';
    } else if (winner === 'computer') {
        outcomeElement.textContent = 'Computer Wins!';
        outcomeElement.style.color = '#c62828';
    } else {
        outcomeElement.textContent = 'It\'s a Draw!';
        outcomeElement.style.color = '#0d47a1';
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    displayChoices(playerChoice, computerChoice);
    
    const winner = determineWinner(playerChoice, computerChoice);
    updateScore(winner);
    displayOutcome(winner);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;
    
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    drawScoreElement.textContent = drawScore;
    
    userChoiceDisplay.textContent = '-';
    computerChoiceDisplay.textContent = '-';
    outcomeElement.textContent = '';
}

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.getAttribute('data-choice');
        playGame(playerChoice);
    });
});

resetButton.addEventListener('click', resetScore);
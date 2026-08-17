const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const resultEl = document.getElementById('result');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetBtn = document.getElementById('reset-btn');

let playerScore = 0;
let computerScore = 0;

const choices = ['rock', 'paper', 'scissors'];
const emojis = {
    rock: '✊',
    paper: '✋',
    scissors: '✌️'
};

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
        playerScoreEl.textContent = playerScore;
        resultEl.innerHTML = `<p>You win! ✨</p>`;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        resultEl.innerHTML = `<p>Computer wins! 🤖</p>`;
    } else {
        resultEl.innerHTML = `<p>It's a draw! 🤝</p>`;
    }
}

function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(playerChoice, computerChoice);
    
    resultEl.innerHTML = `
        <p>You chose ${emojis[playerChoice]} ${playerChoice}</p>
        <p>Computer chose ${emojis[computerChoice]} ${computerChoice}</p>
    `;
    
    updateScore(winner);
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    resultEl.innerHTML = '<p>Make your choice!</p>';
}

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        playRound(playerChoice);
    });
});

resetBtn.addEventListener('click', resetScore);
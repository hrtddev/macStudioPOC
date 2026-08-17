const targetNumber = Math.floor(Math.random() * 50) + 1;
let guesses = [];
let gameActive = true;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const newGameButton = document.getElementById('newGameButton');
const messageElement = document.getElementById('message');
const guessesListElement = document.getElementById('guessesList');

function updateGuessesList() {
    guessesListElement.textContent = guesses.length > 0 ? guesses.join(', ') : 'None';
}

function showMessage(text, isError = false) {
    messageElement.textContent = text;
    messageElement.style.color = isError ? '#f44336' : '#0d47a1';
}

function validateGuess(guess) {
    if (guess === '') {
        return { valid: false, message: 'Please enter a number.' };
    }
    if (isNaN(guess)) {
        return { valid: false, message: 'Please enter a valid number.' };
    }
    if (!Number.isInteger(Number(guess))) {
        return { valid: false, message: 'Please enter a whole number.' };
    }
    if (guess < 1 || guess > 50) {
        return { valid: false, message: 'Please enter a number between 1 and 50.' };
    }
    return { valid: true };
}

function processGuess() {
    if (!gameActive) return;

    const guess = guessInput.value.trim();
    const validation = validateGuess(guess);

    if (!validation.valid) {
        showMessage(validation.message, true);
        return;
    }

    const guessValue = parseInt(guess);
    
    if (guesses.includes(guessValue)) {
        showMessage('You already guessed that number!', true);
        return;
    }

    guesses.push(guessValue);
    updateGuessesList();

    if (guessValue === targetNumber) {
        showMessage(`Congratulations! You guessed the number ${targetNumber}!`, false);
        gameActive = false;
    } else if (guessValue < targetNumber) {
        showMessage('Too low! Try a higher number.', false);
    } else {
        showMessage('Too high! Try a lower number.', false);
    }

    guessInput.value = '';
    guessInput.focus();
}

function startNewGame() {
    const newTargetNumber = Math.floor(Math.random() * 50) + 1;
    targetNumber = newTargetNumber;
    guesses = [];
    gameActive = true;
    updateGuessesList();
    showMessage('New game started! Guess a number between 1 and 50.');
    guessInput.value = '';
    guessInput.focus();
}

guessButton.addEventListener('click', processGuess);
newGameButton.addEventListener('click', startNewGame);

guessInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        processGuess();
    }
});

showMessage('Guess a number between 1 and 50!');
// Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize variables
const minNumber = 1;
const maxNumber = 100;
let targetNumber = getRandomNumber(minNumber, maxNumber);
let attempts = 0;

// Function to check the user's guess
function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < minNumber || guess > maxNumber) {
        setMessage("Please enter a valid number between 1 and 100.");
        return;
    }

    attempts++;

    if (guess === targetNumber) {
        setMessage(`Congratulations! You guessed the number ${targetNumber} in ${attempts} attempts.`);
        resetGame();
    } else if (guess < targetNumber) {
        setMessage("Too low! Try again.");
    } else {
        setMessage("Too high! Try again.");
    }

    guessInput.value = ""; // Clear input field after each guess
}

// Function to display messages to the user
function setMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}

// Function to reset the game
function resetGame() {
    targetNumber = getRandomNumber(minNumber, maxNumber);
    attempts = 0;
}

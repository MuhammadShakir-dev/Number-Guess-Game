let score = 0;

function generateNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function startGame() {
  const randomNumber = generateNumber();
  const userGuess = parseInt(window.prompt('Guess a number between 1 and 10'));
  
  if (userGuess === randomNumber) {
    score += 5;
    window.alert(`Congratulations! You guessed the number! Your score is ${score}.`);
    const playAgain = window.confirm('Do you want to play again?');
    if (playAgain) {
      startGame();
    }
  } else {
    window.alert(`Sorry, the number was ${randomNumber}. Try again.`);
    startGame();
  }
}

startGame();

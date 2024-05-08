function handleKeyBoardPressUpEvent(event) {
  const playerPress = event.key;

  // stop the game if press Esc
  if (playerPress === "Escape") {
    gameOver();
  }

  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  if (playerPress === expectedAlphabet) {
    // update score
    const currentScore = getTextElementValueById("current-score");
    const newScore = currentScore + 1;
    setTextElementValueById("current-score", newScore);
    removeBgColor(currentAlphabet);
    continueGame();
  } else {
    // update life count
    const currentLife = getTextElementValueById("current-life");
    const newLife = currentLife - 1;
    setTextElementValueById("current-life", newLife);
    if (newLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyBoardPressUpEvent);
function continueGame() {
  //generate a random alphabet
  const alphabet = getARandomAlphabet();
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  // show the alphabet in keyboard
  setBgColor(alphabet);
}

function play() {
  //hide everything show only play-ground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");
  //reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);
  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  //update final score
  // get final score
  const lastScore = getTextElementValueById("current-score");
  setTextElementValueById("game-score", lastScore);

  // clear the last selected alphabet
  const currentAlphabet = getElementTextById("current-alphabet");
  removeBgColor(currentAlphabet);
}

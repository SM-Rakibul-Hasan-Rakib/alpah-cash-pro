// function play() {
//   // step-1: hide the home screen. to hide the screen and the class hidden to the home section.

//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   // console.log(playgroundSection.classList);
//   playgroundSection.classList.remove("hidden");
// }
function handleKeyboardKeyUpEvent(event) {
  const playerPressed = event.key;
  console.log("player pressed", playerPressed);
  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerPressed, currentAlphabet);

  // check matched right or not
  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");
    console.log("you have pressed correctly", expectedAlphabet);

    const currentScore = getTextElementValueById("current-score");
    // console.log(currentScore);

    const updatedScore = currentScore + 1;
    setTextElementValueByID("current-score", updatedScore);

    // ------------------------------
    // update-score
    // 1. get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    // // 2.increase the score by
    const newScore = currentScore + 1;
    // // 3.show the update score
    // currentScoreElement.innerText = newScore;
    // start new round
    removeBackgroundColorById(expectedAlphabet);
    contiuneGame();
  } else {
    console.log("you missed. you lost a life");
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueByID("current-life", updatedLife);

    if (updatedLife === 0) {
      gameOver();
    }
    // ------------------------------------------------------------------
    // step-1 : get the current lfe number
    //  const currentLifeElement = document.getElementById("current-life");
    //   const currentLifeText = currentLifeElement.innerText;
    //   const currentLife = parseInt(currentLifeText);
    //   // step-2: reduce the life count
    //   const newLife = currentLife - 1;

    //   // step-3 : display the updated life count
    //   currentLifeElement.innerText = newLife;
  }
}
// capture keyboard key pressed
document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function contiuneGame() {
  // step-1: generate a random alphbaet
  const alphbaet = getRandomAlphbate();

  // console.log("your random", alphbaet);

  // set randomly generate alphbet to the screen (show in skin)

  const currentAlphbetElement = document.getElementById("current-alphabet");
  currentAlphbetElement.innerText = alphbaet;

  // set background color
  setBackgroundById(alphbaet);
}

function play() {
  hideElementById("home-screen");
  showElementById("play-ground");
  contiuneGame();
}
function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
}

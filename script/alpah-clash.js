// function play() {
//   // step-1: hide the home screen. to hide the screen and the class hidden to the home section.

//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   // console.log(playgroundSection.classList);
//   playgroundSection.classList.remove("hidden");
// }
const audio = new Audio();

let isGamePlanOn = false;

const artBoard = document.getElementById("art-board");

const modalBox = document.getElementById("modal-box");

function handleKeyboardKeyUpEvent(event) {
  if (isGamePlanOn == false) return;
  const playerPressed = event.key;
  // console.log("player pressed", playerPressed);
  console.log("player pressed", playerPressed);

  // stop the game if pressed 'ESC'
  if (playerPressed === "Escape") {
    gameOver();
  }
  // get the expected to press
  const currentAlphabetElement = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerPressed, currentAlphabet);

  // check matched right or not
  if (playerPressed === expectedAlphabet) {
    console.log("you get a point");
    audio.src = "../audio/success.wav";
    audio.play();
    // console.log("you have pressed correctly", expectedAlphabet);

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
    audio.src = "../audio/wrong.wav";
    audio.play();

    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;

    const updatedLifePercentage = (updatedLife / 5) * 100;
    // console.log(updatedLifePercentage);

    artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLifePercentage}%,red)`;

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
  // hide everything show only the playground
  hideElementById("home-screen");
  hideElementById("final-score");
  showElementById("play-ground");

  // reset score and life
  setTextElementValueByID("current-life", 5);
  setTextElementValueByID("current-score", 0);

  isGamePlanOn = true;

  contiuneGame();
}
function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");
  // update game-score
  // 1.get the final score
  const lastScore = getTextElementValueById("current-score");
  console.log(lastScore);
  setTextElementValueByID("last-score", lastScore);
  // clear the last element
  const currentAlphabet = getElementTextById("current-alphabet");
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
  isGamePlanOn = false;
  artBoard.style.background = "linear-gradient(#FFFFFFB3 100%,red)";
}

// function modalOpen(event) {
//   if (event.clientY < 20) {
//     modalBox.style.display = "flex";
//   }
// }

// function modalClose() {
//   modalBox.style.display = "none";
// }
// document.body.onmousemove = modalOpen;

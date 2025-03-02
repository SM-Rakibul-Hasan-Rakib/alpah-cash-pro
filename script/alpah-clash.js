// function play() {
//   // step-1: hide the home screen. to hide the screen and the class hidden to the home section.

//   const homeSection = document.getElementById("home-screen");
//   homeSection.classList.add("hidden");

//   // show the playground
//   const playgroundSection = document.getElementById("play-ground");
//   // console.log(playgroundSection.classList);
//   playgroundSection.classList.remove("hidden");
// }

function contiuneGame() {
  // step-1: generate a random alphbaet
  const alphbaet = getRandomAlphbate();

  console.log("your random", alphbaet);

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

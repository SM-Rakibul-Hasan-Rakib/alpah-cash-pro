function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function getRandomAlphbate() {
  const alphbaetString = "abcdefghikjlmnopqrstuvwxyz";
  const alphbates = alphbaetString.split("");
  // console.log(alphbate);

  // get a random index between 0-25
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  // console.log(index);

  const alphbaet = alphbates[index];
  // console.log(index, alphbaets);
  return alphbaet;
}

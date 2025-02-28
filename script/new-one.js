function getRandomAlphbate() {
  const alphbaetString = "abcdefghijklkmnopqrstuvwxyz";
  const alphbaets = alphbaetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphbaet = alphbaets[index];
  return alphbaet;
}

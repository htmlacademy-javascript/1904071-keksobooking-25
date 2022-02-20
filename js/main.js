function getRandomNumber(min, max) {
  const randomInt = Math.random() * (max - min) + min;
  return Math.floor(randomInt);
}

function getRandomFloat(min, max, digits) {
  let randomFloat = Math.random() * (max - min) + min;
  randomFloat = randomFloat.toFixed(digits);
  return randomFloat;
}
getRandomNumber(2, 2);
getRandomFloat(2, 5, 1);

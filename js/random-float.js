function getRandomFloat(min, max, digits) {
  let randomFloat = Math.random() * (max - min) + min;
  randomFloat = randomFloat.toFixed(digits);
  return randomFloat;
}
export {getRandomFloat};

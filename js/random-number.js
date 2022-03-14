function getRandomNumber(min, max) {
  const randomInt = Math.random() * (max - min) + min;
  return Math.floor(randomInt);
}
export {getRandomNumber};

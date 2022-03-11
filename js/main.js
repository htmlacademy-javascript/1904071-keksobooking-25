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

function getAuthor(param) {
  let tempAvatar = String(param).padStart(2, '0');
  tempAvatar = 'img/avatars/user' + tempAvatar + '.png';
  const tempAuthor = {
    avatar: tempAuthor,
  }
  return tempAuthor;
};

function getFinalObject() {
  const finalObject = [];
  for (let i = 0; i < 10; i++) {
    const tempAuthor = getAuthor(i + 1);
  }
  const finalObjectElement = {
    tempAuthor,
  }
  finalObject.push(finalObjectElement);
  return finalObject;
};


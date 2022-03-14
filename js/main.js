const TITLE = [
  'заголовок1',
  'заголовок2',
  'заголовок3',
  'заголовок4',
  'заголовок5',
  'заголовок6',
  'заголовок7',
  'заголовок8',
  'заголовок9',
  'заголовок10'
];

const DESCRIPTION = [
  'Описание помещения1',
  'Описание помещения2',
  'Описание помещения3',
  'Описание помещения4',
  'Описание помещения5',
  'Описание помещения6',
  'Описание помещения7',
  'Описание помещения8',
  'Описание помещения9',
  'Описание помещения10'
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel'
];

const CHECKTIME = [
  '12:00',
  '13:00',
  '14:00'
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator'
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

function getRandomNumber(min, max) {
  const randomInt = Math.random() * (max - min) + min;
  return Math.floor(randomInt);
}

function getRandomFloat(min, max, digits) {
  let randomFloat = Math.random() * (max - min) + min;
  randomFloat = randomFloat.toFixed(digits);
  return randomFloat;
}

function getAuthor(param) {
  let tempAvatar = String(param).padStart(2, '0');
  tempAvatar = 'img/avatars/user' + tempAvatar + '.png';
  const tempAuthor = {
    avatar: tempAvatar,
  }
  return tempAuthor;
};

function getFeatures(featuresArray) {
  const tempOption = getRandomNumber(0, featuresArray.length);
  const selectedOptions = [];
  for (let i = 0; i < tempOption; i++) {
    selectedOptions[i] = featuresArray[i];
  }
  return selectedOptions;
};

function getOffer(number, tempAddress) {
  const tempTitle = TITLE[number];
  const tempPrice = getRandomNumber(1, 1000);
  const tempType = TYPE[getRandomNumber(0, 4)];
  const tempRooms = getRandomNumber(1, 10);
  const tempGuests = getRandomNumber(1, 10);
  const tempDescription = DESCRIPTION[number];
  const tempCheckin = CHECKTIME[getRandomNumber(0, 2)];
  const tempCheckout = CHECKTIME[getRandomNumber(0, 2)];
  const tempFeatures = getFeatures(FEATURES);
  const tempPhotos = getFeatures(PHOTOS);
  const tempOffer = {
    title: tempTitle,
    address: tempAddress,
    price: tempPrice,
    type: tempType,
    rooms: tempRooms,
    guests: tempGuests,
    checkin: tempCheckin,
    checkout: tempCheckout,
    features: tempFeatures,
    description: tempDescription,
    photos: tempPhotos
  }
  return tempOffer;
};

function getLocation() {
  const lat = getRandomFloat(35.65000, 35.70000, 5);
  const lng = getRandomFloat(139.70000, 139.80000, 5);
  const tempLocation = {
    lat,
    lng
  }
  return tempLocation;
};



function getFinalObject() {
  const finalObject = [];
  for (let i = 0; i < 10; i++) {
    const author = getAuthor(i + 1);
    const location = getLocation();
    const tempAddress = location.lat + ', ' + location.lng;
    const offer = getOffer(i, tempAddress);
    const finalObjectElement = {
      author,
      offer,
      location
    };
    finalObject.push(finalObjectElement);
  }
  return finalObject;
};
console.log(getFinalObject())

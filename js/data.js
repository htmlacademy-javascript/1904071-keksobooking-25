import {
  TITLE,
  DESCRIPTION,
  TYPE,
  CHECKTIME,
  FEATURES,
  PHOTOS
} from './consts.js';
import {
  getRandomNumber
} from './random-number.js';
import {
  getRandomFloat
} from './random-float.js';

function getAuthor(param) {
  let tempAvatar = String(param).padStart(2, '0');
  tempAvatar = 'img/avatars/user' + tempAvatar + '.png';
  const tempAuthor = {
    avatar: tempAvatar,
  };
  return tempAuthor;
}

function getFeatures(featuresArray) {
  const tempOption = getRandomNumber(0, featuresArray.length);
  const selectedOptions = [];
  for (let i = 0; i < tempOption; i++) {
    selectedOptions[i] = featuresArray[i];
  }
  return selectedOptions;
}

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
  };
  return tempOffer;
}

function getLocation() {
  const lat = getRandomFloat(35.65000, 35.70000, 5);
  const lng = getRandomFloat(139.70000, 139.80000, 5);
  const tempLocation = {
    lat,
    lng
  };
  return tempLocation;
}

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
}
export {
  getFinalObject
};

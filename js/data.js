import {getRandomIntegerNumber, getRandomFloatingNumber} from './util.js';
//import {getData} from './api.js';

const TITLE = 'Заголовок объявления';
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Описание помещения №1', 'Описание помещения №2', 'Описание помещения №3', 'Описание помещения №4', 'Описание помещения №5'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const PRICE_MIN = 1000;
const PRICE_MAX = 50000;
const LAT_MIN = 35.65;
const LAT_MAX = 35.7;
const LNG_MIN = 139.7;
const LNG_MAX = 139.8;
const LOCATION_DECIMAL_PLASES = 5;
const ROOMS_MIN = 1;
const ROOMS_MAX = 4;
const GUESTS_MIN = 1;
const GUESTS_MAX = 8;


const createAuthor = (index) => {
  const avatar = `img/avatars/user${  String(index).padStart(2,'0')  }.png`;
  return { avatar };
};

const createOffer = (lat, lng) => ({
  title: TITLE,
  address: `${lat}, ${lng}`,
  price: getRandomIntegerNumber(PRICE_MIN, PRICE_MAX),
  type: TYPES[getRandomIntegerNumber(0, TYPES.length - 1)],
  rooms: getRandomIntegerNumber(ROOMS_MIN, ROOMS_MAX),
  guests: getRandomIntegerNumber(GUESTS_MIN, GUESTS_MAX),
  checkin: TIMES[getRandomIntegerNumber(0, TIMES.length - 1)],
  checkout: TIMES[getRandomIntegerNumber(0, TIMES.length - 1)],
  features: FEATURES.slice(0, getRandomIntegerNumber(0, FEATURES.length)),
  description: DESCRIPTIONS[getRandomIntegerNumber(0, DESCRIPTIONS.length - 1)],
  photos: PHOTOS.slice(0, getRandomIntegerNumber(0, PHOTOS.length)),
});

const createAd = (index) => {
  const lat = getRandomFloatingNumber(LAT_MIN, LAT_MAX, LOCATION_DECIMAL_PLASES);
  const lng = getRandomFloatingNumber(LNG_MIN, LNG_MAX, LOCATION_DECIMAL_PLASES);
  const ad = {
    author: createAuthor(index + 1),
    offer: createOffer(lat, lng),
    location: {
      lat: lat,
      lng: lng,
    },
  };
  return ad;
};

const createSimilarAds = (count) => new Array(count).fill(null).map((curentValue, index) => createAd(index));

export {createSimilarAds};

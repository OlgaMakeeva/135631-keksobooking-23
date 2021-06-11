//Доработала проверки, что переданы оба аргумента и они являются числами.
//Но не получилось сократить, и получается, что продублировала код.

function getRandomIntegerNumber(min, max) {
  const isTypeArguments  = typeof min === 'number' && typeof max === 'number';
  if (!isTypeArguments) {
    return 'Ошибка! Передаваемые аргументы должны быть числами.';
  }
  const isQuantityArguments  = min === undefined && max === undefined;
  if (isQuantityArguments) {
    return 'Ошибка! Нужно ввести два числа.';
  }
  const isWrongPeriod = min >= max || min < 0 || max < 0;
  if (isWrongPeriod) {
    return 'Ошибка! Неверный диапазон.';
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntegerNumber(1, 5);

function getRandomFloatingNumber(min, max, decimalPlaces) {
  const isTypeArguments  = typeof min === 'number' && typeof max === 'number';
  if (!isTypeArguments) {
    return 'Ошибка! Передаваемые аргументы должны быть числами.';
  }
  const isQuantityArguments  = min === undefined && max === undefined;
  if (isQuantityArguments) {
    return 'Ошибка! Нужно ввести два числа.';
  }
  const isWrongPeriod = min >= max || min < 0 || max < 0;
  if (isWrongPeriod) {
    return 'Ошибка! Неверный диапазон.';
  }
  const randomNumber = Math.random() * (max - min) + min;
  return +randomNumber.toFixed(decimalPlaces);
}
getRandomFloatingNumber(1, 5, 5);

//Не получилось разобраться с:
//1- тем, чтобы элементы массива не повторялись - avatar, features
//(пыталась использовать sort для перемешивания эл-в, а потом с помощью slice брать радномное количество с начала, но сложно);
//2-address,должна получться строка из двух координат location?;

const AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const TITLE = 'Заголовок объявления';

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Описание помещения №1',
  'Описание помещения №2',
  'Описание помещения №3',
  'Описание помещения №4',
  'Описание помещения №5',
];

/* не доделала, т.к. здесь по аналогии с features
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
*/

const createAd = function() {
  return {
    author: AVATAR[getRandomIntegerNumber(0, AVATAR.length - 1)],
    offer: {
      title: TITLE,
      address: 'location',
      price: getRandomIntegerNumber(1000, 50000),
      type: TYPE[getRandomIntegerNumber(0, TYPE.length - 1)],
      rooms: getRandomIntegerNumber(1, 4),
      guests: getRandomIntegerNumber(1, 8),
      checkin: CHECKIN[getRandomIntegerNumber(0, CHECKIN.length - 1)],
      checkout: CHECKOUT[getRandomIntegerNumber(0, CHECKOUT.length - 1)],
      features: FEATURES.slice(0, 2),
      description: DESCRIPTION[getRandomIntegerNumber(0, DESCRIPTION.length - 1)],
    },
    location: {
      lat: getRandomFloatingNumber(35.65, 35.7, 5),
      lng: getRandomFloatingNumber(139.7, 139.8, 5),
    },
  };
};

const similarAd = new Array(10).fill(null).map(() => createAd());
(similarAd);

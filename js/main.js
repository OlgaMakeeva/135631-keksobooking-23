// Случайное число в интервале (min, max)

function getRandomNumber(min, max) {
  if (min >= max || min < 0 || max < 0) {
    return 'Ошибка! Неверный диапазон.';
  }
  const random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
}

getRandomNumber(1, 5);
//console.log(getRandomNumber(1, 5));

// Случайное число с плавающей точкой

// eslint-disable-next-line id-length
function getRandomPoint(min, max, n) {
  if (min >= max || min < 0 || max < 0) {
    return 'Ошибка! Неверный диапазон.';
  }
  const random = (0 * (max - min) + min).toFixed(n);
  return random;
}

getRandomPoint(1, 5, 5);
//console.log(getRandomPoint(1, 5, 5));

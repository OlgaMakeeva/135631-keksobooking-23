function checkNumbers(min, max) {
  const isBothNumbers  = typeof min === 'number' && typeof max === 'number';
  if (!isBothNumbers) {
    return 'Ошибка! Передаваемые аргументы должны быть числами.';
  }
  const isWrongPeriod = min >= max || min < 0 || max < 0;
  if (isWrongPeriod) {
    return 'Ошибка! Неверный диапазон.';
  }
}

function getRandomIntegerNumber(min, max) {
  const error = checkNumbers(min, max);
  if(error) {
    return error;
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

function getRandomFloatingNumber(min, max, decimalPlaces) {
  const error = checkNumbers(min, max);
  if(error) {
    return error;
  } else {
    const randomNumber = Math.random() * (max - min) + min;
    return +randomNumber.toFixed(decimalPlaces);
  }
}

export {getRandomIntegerNumber, getRandomFloatingNumber};

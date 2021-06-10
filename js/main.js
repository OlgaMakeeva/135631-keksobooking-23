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
  const randomNumber = Math.random() * (max - min + 1) + min;
  return +randomNumber.toFixed(decimalPlaces);
}
getRandomFloatingNumber(1, 5, 5);

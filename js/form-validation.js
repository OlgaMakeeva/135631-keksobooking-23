const priceElement = document.querySelector('#price');
const titleElement = document.querySelector('#title');
const roomQuantity = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacityOptions = capacity.querySelectorAll('option');

const minRentPrice = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0'],
};

priceElement.addEventListener('invalid', () => {
  if (priceElement.validity.rangeUnderflow) {
    const min = priceElement.getAttribute('min');
    priceElement.setCustomValidity(`Значение не должно быть меньше ${min}`);
  } else if (priceElement.validity.rangeOverflow) {
    const max = priceElement.getAttribute('max');
    priceElement.setCustomValidity(`Значение не должно превышать ${max}`);
  } else if (priceElement.validity.valueMissing) {
    priceElement.setCustomValidity('Заполните обязательное поле');
  } else {
    priceElement.setCustomValidity('');
  }
});

titleElement.addEventListener('invalid', () => {
  if (titleElement.validity.tooShort) {
    titleElement.setCustomValidity('Введите больше 30 символов');
  } else if (titleElement.validity.tooLong) {
    titleElement.setCustomValidity('Введите меньше 100 символов');
  } else if (titleElement.validity.valueMissing) {
    titleElement.setCustomValidity('Заполните обязательное поле');
  } else {
    titleElement.setCustomValidity('');
  }
});

const onRoomQuantityChange = () => {
  const availableCapacity = minRentPrice[roomQuantity.value];

  const optionToSelect = availableCapacity[0];

  capacityOptions.forEach((element) => {
    if (availableCapacity.includes(element.value)) {
      element.disabled = false;
    } else {
      element.disabled = true;
    }

    if (element.value === optionToSelect) {
      element.selected = true;
    } else {
      element.selected = false;
    }
  });
};

onRoomQuantityChange();
roomQuantity.addEventListener('change', onRoomQuantityChange);

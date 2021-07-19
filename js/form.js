import { resetMap } from './map.js';
import { resetFilters } from './filters.js';

const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');
const titleElement = document.querySelector('#title');
const houseTypeSelect = document.querySelector('#type');
const priceElement = document.querySelector('#price');
const roomQuantity = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const timeInSelect = document.querySelector('#timein');
const timeOutSelect = document.querySelector('#timeout');
const descriptionElement = document.querySelector('#description');
const featuresCheckboxes = document.querySelectorAll('.features__checkbox');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  Array.from(adFormElements).forEach((element) => element.disabled = true);
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  Array.from(adFormElements).forEach((element) => element.disabled = false);
};

const resetForm = () => {
  titleElement.value = '';
  houseTypeSelect.value = 'flat';
  priceElement.value = '';
  roomQuantity.value = '1';
  capacity.value = '1';
  timeInSelect.value = '12:00';
  timeOutSelect.value = '12:00';
  descriptionElement.value = '';

  featuresCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

  resetMap();
  resetFilters();
};

export {disableForm, enableForm, resetForm};

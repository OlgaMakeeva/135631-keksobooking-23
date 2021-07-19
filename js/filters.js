const mapFilterForm = document.querySelector('.map__filters');
const filterFormElements = mapFilterForm.querySelectorAll('select, fieldset');

const disableFilters = () => {
  mapFilterForm.classList.add('map__filters--disabled');
  Array.from(filterFormElements).forEach((element) => element.disabled = true);
};

const enableFilters = () => {
  mapFilterForm.classList.remove('map__filters--disabled');
  Array.from(filterFormElements).forEach((element) => element.disabled = false);
};

const typeFilter = document.querySelector('#housing-type');
const priceFilter = document.querySelector('#housing-price');
const roomsFilter = document.querySelector('#housing-rooms');
const guestsFilter = document.querySelector('#housing-guests');
const mapCheckboxes = document.querySelectorAll('.map__checkbox');

const resetFilters = () => {
  typeFilter.value = 'any';
  priceFilter.value = 'any';
  roomsFilter.value = 'any';
  guestsFilter.value = 'any';

  mapCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

export {disableFilters, enableFilters, resetFilters};

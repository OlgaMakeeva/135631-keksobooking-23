//import { debounce } from './utils/debounce.js';

const priceMap = {
  low: {
    start: 0,
    end: 10000,
  },
  middle: {
    start: 10000,
    end: 50000,
  },
  high: {
    start: 50000,
    end: Infinity,
  },
};

const mapFilterForm = document.querySelector('.map__filters');
const filterFormElements = mapFilterForm.querySelectorAll('select, fieldset');
const typeFilter = mapFilterForm.querySelector('#housing-type');
const roomsFilter = mapFilterForm.querySelector('#housing-rooms');
const priceFilter = mapFilterForm.querySelector('#housing-price');
const guestsFilter = mapFilterForm.querySelector('#housing-guests');

const disableFilters = () => {
  mapFilterForm.classList.add('map__filters--disabled');
  Array.from(filterFormElements).forEach((element) => element.disabled = true);
};

const enableFilters = () => {
  mapFilterForm.classList.remove('map__filters--disabled');
  Array.from(filterFormElements).forEach((element) => element.disabled = false);
};

const filterOffers = ({offer}) => {
  const checkedFeatures = filterFormElements.querySelectorAll('input[type="checkbox"]:checked');

  const checkFeature = () => {
    if (offer.features) {
      return [...checkedFeatures].every((feature) => (offer.features.includes(feature.value)));
    }
  };

  const checkType = () => offer.type === typeFilter.value || typeFilter.value === 'any';
  const checkRooms = () => offer.rooms === +roomsFilter.value || roomsFilter.value === 'any';
  const checkGuests = () => offer.guests === +guestsFilter.value || guestsFilter.value === 'any';
  const checkPrice = () => priceFilter.value === 'any' ? true :
    offer.price >= priceMap[priceFilter.value].start && offer.price < priceMap[priceFilter.value].end;

  if (
    checkType() &&
    checkRooms() &&
    checkGuests() &&
    checkPrice() &&
    checkFeature()
  ) {
    return true;
  }
};
/*
const onChange = (input) => {
  input.addEventListener('change', debounce(filterOffers, 500));
};

onChange (filterFormElements);
onChange (typeFilter);
onChange (roomsFilter);
onChange (priceFilter);
onChange (guestsFilter);
*/
const resetFilters = () => {
  mapFilterForm.reset();
};

export {disableFilters, enableFilters, resetFilters, filterOffers};

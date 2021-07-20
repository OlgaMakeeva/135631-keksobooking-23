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

const resetFilters = () => {
  mapFilterForm.reset();
};

export {disableFilters, enableFilters, resetFilters};

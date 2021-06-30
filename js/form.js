const adForm = document.querySelector('.ad-form');
const mapFilterForm = document.querySelector('.map__filters');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilterForm.classList.add('map__filters--disabled');
  [adForm.elements].forEach((element) => element.setAttribute('disabled',''));
  [mapFilterForm.elements].forEach((element) => element.setAttribute('disabled',''));
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilterForm.classList.remove('map__filters--disabled');
  [adForm.elements].forEach((element) => element.removeAttribute('disabled'));
  [mapFilterForm.elements].forEach((element) => element.removeAttribute('disabled'));
};

export {disableForm, enableForm};

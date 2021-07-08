const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.querySelectorAll('fieldset');

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  Array.from(adFormElements).forEach((element) => element.disabled = true);
};

const enableForm = () => {
  adForm.classList.remove('ad-form--disabled');
  Array.from(adFormElements).forEach((element) => element.disabled = false);
};


export {disableForm, enableForm};

import { showSuccessPopup, showErrorPopup  } from './results-popup.js';
import { resetMap } from './map.js';
import { resetForm } from './form.js';
import { resetFilters } from './filters.js';

const adForm = document.querySelector('.ad-form');
const clearFormButton = document.querySelector('.ad-form__reset');

adForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch('https://23.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body: formData,
  },
  )
    .then((response) => {
      if (response.ok) {
        showSuccessPopup();
        resetForm();
        resetMap();
        resetFilters();
      } else {
        showErrorPopup();
      }
    })
    .catch(() => {
      showErrorPopup();
    });
});

clearFormButton.addEventListener('click', resetForm);

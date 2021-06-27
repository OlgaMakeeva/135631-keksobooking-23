import {similarAd} from './data.js';

const ACCOMODATION_TYPE = {
  'flat' : 'Квартира',
  'bungalow' : 'Бунгало',
  'house' : 'Дом',
  'palace' : 'Дворец',
  'hotel' : 'Отель',
};

const map = document.querySelector('#map-canvas');

const popupTemplateCard = document.querySelector('#card').content.querySelector('.popup');

const renderFeatures = (adElement, features) => {
  const featureElements = adElement.querySelectorAll('.popup__feature');

  featureElements.forEach((element) => {
    element.classList.add('hidden');
  });

  features.forEach((element) => {
    adElement.querySelector(`.popup__feature--${element}`).classList.remove('hidden');
  });
};

const renderPhotos = (adPopupElement, links) => {
  const photoElement = adPopupElement.querySelector('.popup__photo');
  const popupPhotos = adPopupElement.querySelector('.popup__photos');

  for (let index = 0; index < links.length-1; index++) {
    const nextPhotoElement = photoElement.cloneNode();
    popupPhotos.appendChild(nextPhotoElement);
  }
  const photoElements = adPopupElement.querySelectorAll('.popup__photo');
  photoElements.forEach((element, index) => {
    element.src = links[index];
  });
};

similarAd.forEach((ads) => {
  const adPopupElement = popupTemplateCard.cloneNode(true);
  adPopupElement.querySelector('.popup__title').textContent = ads.offer.title;
  adPopupElement.querySelector('.popup__text--address').textContent = ads.offer.address;
  adPopupElement.querySelector('.popup__text--price').textContent = ads.offer.price;
  adPopupElement.querySelector('.popup__type').textContent = ACCOMODATION_TYPE[ads.offer.type];
  adPopupElement.querySelector('.popup__text--capacity').textContent = `${ads.offer.rooms} комнаты для ${ads.offer.guests} гостей`;
  adPopupElement.querySelector('.popup__text--time').textContent = `Заезд после ${ads.offer.checkin}, выезд после ${ads.offer.checkout}`;
  renderFeatures(adPopupElement, ads.offer.features);
  adPopupElement.querySelector('.popup__description').textContent = ads.offer.description;
  adPopupElement.querySelector('.popup__avatar').src = ads.author.avatar;
  renderPhotos(adPopupElement, ads.offer.photos);
  map.appendChild(adPopupElement);
});

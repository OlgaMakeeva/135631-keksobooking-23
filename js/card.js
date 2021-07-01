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
  popupPhotos.innerHTML = '';
  links.forEach((element, index) => {
    const nextPhotoElement = photoElement.cloneNode();
    nextPhotoElement.src = links[index];
    popupPhotos.appendChild(nextPhotoElement);
  });
};

const renderAds = (ads) => {
  const adPopupElement = popupTemplateCard.cloneNode(true);

  const title = adPopupElement.querySelector('.popup__title');
  if(ads.offer.title) {
    title.textContent = ads.offer.title;
  } else {
    title.remove();
  }

  const address = adPopupElement.querySelector('.popup__text--address');
  if(ads.offer.address) {
    address.textContent = ads.offer.address;
  } else {
    address.remove();
  }

  const price = adPopupElement.querySelector('.popup__text--price');
  if(ads.offer.price) {
    price.textContent = ads.offer.price;
  } else {
    price.remove();
  }

  const type = adPopupElement.querySelector('.popup__type');
  if(ads.offer.type) {
    type.textContent = ACCOMODATION_TYPE[ads.offer.type];
  } else {
    type.remove();
  }

  const capacity = adPopupElement.querySelector('.popup__text--capacity');
  if(ads.offer.rooms, ads.offer.guests) {
    capacity.textContent = `${ads.offer.rooms} комнаты для ${ads.offer.guests} гостей`;
  } else {
    capacity.remove();
  }

  const time = adPopupElement.querySelector('.popup__text--time');
  if(ads.offer.checkin, ads.offer.checkout) {
    time.textContent = `Заезд после ${ads.offer.checkin}, выезд после ${ads.offer.checkout}`;
  } else {
    time.remove();
  }

  renderFeatures(adPopupElement, ads.offer.features);

  const description = adPopupElement.querySelector('.popup__description');
  if(ads.offer.description) {
    description.textContent = ads.offer.description;
  } else {
    description.remove();
  }

  adPopupElement.querySelector('.popup__avatar').src = ads.author.avatar;

  renderPhotos(adPopupElement, ads.offer.photos);

  map.appendChild(adPopupElement);
};

export {renderAds};

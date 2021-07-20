const ACCOMODATION_TYPE = {
  'flat' : 'Квартира',
  'bungalow' : 'Бунгало',
  'house' : 'Дом',
  'palace' : 'Дворец',
  'hotel' : 'Отель',
};

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

const renderAd = (ad) => {
  const adPopupElement = popupTemplateCard.cloneNode(true);

  const title = adPopupElement.querySelector('.popup__title');
  if(ad.offer.title) {
    title.textContent = ad.offer.title;
  } else {
    title.remove();
  }

  const address = adPopupElement.querySelector('.popup__text--address');
  if(ad.offer.address) {
    address.textContent = ad.offer.address;
  } else {
    address.remove();
  }

  const price = adPopupElement.querySelector('.popup__text--price');
  if(ad.offer.price) {
    price.textContent = ad.offer.price;
  } else {
    price.remove();
  }

  const type = adPopupElement.querySelector('.popup__type');
  if(ad.offer.type) {
    type.textContent = ACCOMODATION_TYPE[ad.offer.type];
  } else {
    type.remove();
  }

  const capacity = adPopupElement.querySelector('.popup__text--capacity');
  if(ad.offer.rooms && ad.offer.guests) {
    capacity.textContent = `${ad.offer.rooms} комнаты для ${ad.offer.guests} гостей`;
  } else {
    capacity.remove();
  }

  const time = adPopupElement.querySelector('.popup__text--time');
  if(ad.offer.checkin && ad.offer.checkout) {
    time.textContent = `Заезд после ${ad.offer.checkin}, выезд после ${ad.offer.checkout}`;
  } else {
    time.remove();
  }

  if(ad.offer.features && ad.offer.features.lenght) {
    renderFeatures(adPopupElement, ad.offer.features);
  }

  const description = adPopupElement.querySelector('.popup__description');
  if(ad.offer.description) {
    description.textContent = ad.offer.description;
  } else {
    description.remove();
  }

  adPopupElement.querySelector('.popup__avatar').src = ad.author.avatar;
  if(ad.offer.photos && ad.offer.photos.lenght) {
    renderPhotos(adPopupElement, ad.offer.photos);
  }
  return adPopupElement;
};

export {renderAd};

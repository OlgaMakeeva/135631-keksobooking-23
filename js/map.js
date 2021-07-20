import { /*disableForm,*/ enableForm } from './form.js';
import { /*disableFilters,*/ enableFilters } from './filters.js';
import {renderAd} from './card.js';

const addressInput = document.querySelector('#address');

const coordinatesPoint = {
  lat: 35.68950,
  lng: 139.69171,
};

const INITIAL_MAP = 10;
const tokyoCoordinatesString = Object.values(coordinatesPoint).join(', ');

/*disableForm();
disableFilters();*/

const map = L.map('map-canvas')
  .setView([coordinatesPoint.lat, coordinatesPoint.lng], INITIAL_MAP)
  .on('load', () => {
    enableForm();
    enableFilters();
    addressInput.value = tokyoCoordinatesString;
  });

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 0],
});

const mainPin = L.marker(
  coordinatesPoint,
  {
    icon: mainPinIcon,
    draggable: true,
  }).addTo(map);

mainPin.on('drag', (evt) => {
  const latLng = evt.target.getLatLng();
  const lat = latLng.lat;
  const lng = latLng.lng;
  addressInput.value = `${lat.toFixed(5)} ${lng.toFixed(5)}`;
});

const resetMap = () => {
  addressInput.value = tokyoCoordinatesString;
  mainPin.setLatLng({
    lat: coordinatesPoint.lat,
    lng: coordinatesPoint.lng,
  });
  map.setView({
    lat: coordinatesPoint.lat,
    lng: coordinatesPoint.lng,
  }, 12);
};

const pinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 0]},
);

const createPin = (data) => {
  const {location, ...rest} = data;
  const pin = L.marker(
    location,
    {
      icon: pinIcon,
      keepInView: true,
    },
  );
  pin
    .addTo(map)
    .bindPopup(renderAd(rest));
};

fetch('https://23.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((offers) => {
    offers.forEach((offer) => {
      createPin(offer);
    });
  });

export {resetMap};

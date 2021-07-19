import {renderAd} from './card.js';
import {createSimilarAds} from './data.js';
import {disableForm, enableForm} from './form.js';
import {disableFilters, enableFilters} from './filters.js';
import './form-validation.js';
import './map.js';
import './api.js';

const ADS_COUNT = 10;
const similarAds = createSimilarAds(ADS_COUNT);
renderAd(similarAds[0]);


const enablePage = () => {
  enableForm();
  enableFilters();
};

const disablePage = () => {
  disableForm();
  disableFilters();
};

disablePage();
enablePage();

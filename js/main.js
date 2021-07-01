import {renderAds} from './card.js';
import {createSimilarAds} from './data.js';
import {disableForm, enableForm} from './form.js';

const ADS_COUNT = 10;

const similarAds = createSimilarAds(ADS_COUNT);
renderAds(similarAds[0]);
disableForm();
enableForm();

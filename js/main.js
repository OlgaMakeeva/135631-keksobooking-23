import {renderAds} from './card.js';
import {createSimilarAds} from './data.js';

const ADS_COUNT = 10;

const similarAds = createSimilarAds(ADS_COUNT);
renderAds(similarAds[0]);

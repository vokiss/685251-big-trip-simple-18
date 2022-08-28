import { getRandomInteger } from '../util.js';

const generateType = () => {
  const types = ['taxi','bus', 'train', 'ship', 'drive', 'flight',
    'check-in', 'sightseeing', 'restaurant'];
  const randomIndex = getRandomInteger(0, types.length - 1);
  return types[randomIndex];
};
const generateName = () => {
  const names = ['Chamonix', 'Geneve', 'Paris', 'Marseille', 'Lyon'];
  const randomIndex = getRandomInteger(0, names.length - 1);
  return names[randomIndex];
};

const generateOfferOption = () => {
  const names = ['Upgrade1', 'Upgrade2', 'Upgrade3', 'Upgrade4', 'Upgrade5'];
  const randomIndex = getRandomInteger(0, names.length - 1);
  return names[randomIndex];
};

// const offerByType = {
//   type: 'taxi',
//   offersByType: {id:1, price: 120, title: 'Upgrade'}
// };

const offers = new Map();
const offerByType1 = {offerByType:1};
offers.set( offerByType1, {
  type: generateType(),
  offer: {id: 1, price: 120 * 1, title: generateOfferOption()}
});
console.log(offers);


export const generateEvent = () => ({
  destination:{
    name: generateName(),
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    pictures: {
      src: `http://picsum.photos/248/152?r=${getRandomInteger(0,5)}`,
      description: 'Chamonix parliament building'
    },
    type: generateType(),
    basePrice: 1100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z'
  },
  offerByType: offers.get(offerByType1)
}
);


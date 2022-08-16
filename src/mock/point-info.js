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

export const generateEvent = () => ({
  destination:{
    name: generateName(),
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    pictures: {
      src: `http://picsum.photos/300/200?r=${getRandomInteger(0, 1)}`,
      description: 'Chamonix parliament building'
    },
    type: generateType(),
    basePrice: 1100,
    dateFrom: '2019-07-10T22:55:56.845Z',
    dateTo: '2019-07-11T11:22:13.375Z'
  },
  offerByType: {
    type: 'taxi',
    offer: {
      id: 1,
      title: 'Upgrade to a business class',
      price: 120
    }
  }
});

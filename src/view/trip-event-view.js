import AbstractView from '../framework/view/abstract-view.js';
import { humanizeTaskDueDate, getRandomInteger } from '../util.js';

const createOffersTemplate = (title, price) => {
  const offerTemplate = `
     <li class="event__offer">
         <span class="event__offer-title">${title}</span>
         +€&nbsp;
         <span class="event__offer-price">${price}</span>
      </li>
`;
  let offers = '';
  for (let i = 0; i < getRandomInteger(0,6); i++) {
    offers += offerTemplate;
  }
  return offers;
};

const tripEventElement = (event) => {
  const {name, type, dateFrom, dateTo} = event.destination;
  const {title, price} = event.offerByType.offer;
  const dateFromMMMDD = humanizeTaskDueDate('MMM DD', dateFrom);
  const dateFromYYYYMMDD = humanizeTaskDueDate('YYYY-MM-DD',dateFrom);
  const dateToYYYYMMDD = humanizeTaskDueDate('YYYY-MM-DD',dateTo);
  const dateFromHHMM = humanizeTaskDueDate('HH:MM',dateFrom);
  const dateToHHMM = humanizeTaskDueDate('HH:MM',dateTo);

  return (
    `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dateFromYYYYMMDD}">${dateFromMMMDD}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dateFromYYYYMMDD}T${dateFromHHMM}">${dateFromHHMM}</time>
          &mdash;
          <time class="event__end-time" datetime="${dateToYYYYMMDD}T${dateToHHMM}">${dateToHHMM}</time>
        </p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">180</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${createOffersTemplate(title, price)}
      </ul>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`
  );};

export default class TripEventView extends AbstractView {
  #event = null;
  constructor(event) {
    super();
    this.#event = event;
  }

  get template() {
    return tripEventElement(this.#event);
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };
}

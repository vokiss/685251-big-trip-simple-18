import {generateEvent} from '../mock/point-info.js';

export default class EventsModel {
  #events = Array.from({length: 0}, generateEvent);
  get events () {
    return this.#events;
  }
}


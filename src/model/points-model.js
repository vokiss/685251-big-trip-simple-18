import {generateEvent} from '../mock/point-info.js';

export default class EventsModel {
  events = Array.from({length: 5}, generateEvent);

  getEvents = () => this.events;
}

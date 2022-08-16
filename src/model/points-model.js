import {generateEvent} from '../mock/point-info.js';

export default class EventsModel {
  events = Array.from({length: 3}, generateEvent);

  getEvents = () => this.events;
}

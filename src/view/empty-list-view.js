import {createElement} from '../render.js';

const createEmptyListElemnt = () => (`
<ul class="trip-events__list"></ul>
`
);

export default class EmptyListView {
  getTemplate() {
    return createEmptyListElemnt();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}


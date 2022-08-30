import {createElement} from '../render.js';

const createEmptyListElemnt = () => (`
<ul class="trip-events__list"></ul>
`
);

export default class EmptyListView {
  #element = null;

  get template() {
    return createEmptyListElemnt();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}


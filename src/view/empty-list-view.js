import AbstractView from '../framework/view/abstract-view.js';

const createEmptyListElemnt = () => (`
<ul class="trip-events__list"></ul>
`
);

export default class EmptyListView extends AbstractView {

  get template() {
    return createEmptyListElemnt();
  }
}


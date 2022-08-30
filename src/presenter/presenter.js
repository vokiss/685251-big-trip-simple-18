import SortView from '../view/sort-view.js';
import addPointView from '../view/add-point-view.js';
import tripEventView from '../view/trip-event-view.js';
import {render} from '../render.js';
import EmptyListView from '../view/empty-list-view.js';

export default class BoardPresenter {
  #emptyListComponent = new EmptyListView();
  #boardContainer = null;
  #eventsModel = null;
  #eventList = [];

  init = (boardContainer, eventsModel) => {
    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
    this.#eventList = [...this.#eventsModel.events];

    render(new SortView(), this.#boardContainer);
    render(this.#emptyListComponent, this.#boardContainer);
    render(new addPointView(this.#eventList[0]), this.#emptyListComponent.element);

    for (let i = 0; i < this.#eventList.length; i++) {
      this.#renderEvent(this.#eventList[i]);
    }

  };

  #renderEvent = (event) => {
    const eventComponent = new tripEventView(event);
    const editPointView = new addPointView(event);

    const replaceEventToEdit = () => {
      this.#emptyListComponent.element.replaceChild(editPointView.element, eventComponent.element);
    };
    const replaceEditToEvent = () => {
      this.#emptyListComponent.element.replaceChild(eventComponent.element, editPointView.element);
    };
    eventComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
      replaceEventToEdit();
    });
    editPointView.element.querySelector('.event__reset-btn').addEventListener('click', () => {
      replaceEditToEvent();
    });

    render(eventComponent, this.#emptyListComponent.element);
  };
}

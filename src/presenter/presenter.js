import SortView from '../view/sort-view.js';
import tripEventView from '../view/trip-event-view.js';
import {render} from '../render.js';
import EmptyListView from '../view/empty-list-view.js';
import EditPointView from '../view/edit-point-view.js';

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
    for (let i = 0; i < this.#eventList.length; i++) {
      this.#renderEvent(this.#eventList[i]);
    }

  };

  #renderEvent = (event) => {
    const eventComponent = new tripEventView(event);
    const editPointView = new EditPointView(event);

    const replaceEventToEdit = () => {
      this.#emptyListComponent.element.replaceChild(editPointView.element, eventComponent.element);
    };
    const replaceEditToEvent = () => {
      this.#emptyListComponent.element.replaceChild(eventComponent.element, editPointView.element);
    };
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceEditToEvent();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };
    eventComponent.element.querySelector('.event__rollup-btn')
      .addEventListener('click', () => {
        replaceEventToEdit();
        document.addEventListener('keydown', onEscKeyDown);
      });
    editPointView.element.querySelector('.event__rollup-btn')
      .addEventListener('click', () => {
        replaceEditToEvent();
        document.removeEventListener('keydown', onEscKeyDown);
      });
    editPointView.element.querySelector('form')
      .addEventListener('submit', (evt) => {
        evt.preventDefault();
        replaceEditToEvent();
        document.removeEventListener('keydown', onEscKeyDown);
      });

    render(eventComponent, this.#emptyListComponent.element);
  };
}

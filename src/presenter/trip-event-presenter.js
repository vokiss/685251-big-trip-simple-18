import {render, replace} from '../framework/render.js';
import TripEventView from '../view/trip-event-view.js';
import EditPointView from '../view/edit-point-view.js';

export default class TripEventPresenter {
  #emptyListComponent = null;

  #eventComponent = null;
  #editPointViewComponent = null;


  constructor(eventListContainer) {
    this.#emptyListComponent = eventListContainer;
  }

  init = (event) => {

    this.#eventComponent = new TripEventView(event);
    this.#editPointViewComponent = new EditPointView(event);

    this.#eventComponent.setClickHandler(this.#setClickHandler);
    this.#editPointViewComponent.setEditClickHandler(this.#setFormSubmitHandler);

    render(this.#eventComponent, this.#emptyListComponent);
  };

  #replaceEventToEdit = () => {
    replace(this.#editPointViewComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #replaceEditToEvent = () => {
    replace(this.#eventComponent, this.#editPointViewComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditToEvent();
    }
  };

  #setClickHandler = () => {
    this.#replaceEventToEdit();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #setEditClickHandler = () => {
    this.#replaceEditToEvent();
  };

  #setFormSubmitHandler = () => {
    this.#replaceEditToEvent();
  };

}


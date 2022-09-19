import {render} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import TripEventView from '../view/trip-event-view.js';
import EmptyListView from '../view/empty-list-view.js';
import EditPointView from '../view/edit-point-view.js';
import NoEventsView from '../view/no-events-view.js';


export default class BoardPresenter {
  #emptyListComponent = new EmptyListView();
  #boardContainer = null;
  #eventsModel = null;
  #eventList = [];

  init = (boardContainer, eventsModel) => {
    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
    this.#eventList = [...this.#eventsModel.events];

    if (this.#eventList.length === 0) {
      render(new NoEventsView(), this.#boardContainer);
    } else {
      render(new SortView(), this.#boardContainer);
      render(this.#emptyListComponent, this.#boardContainer);
      for (let i = 0; i < this.#eventList.length; i++) {
        this.#renderEvent(this.#eventList[i]);
      }
    }
  };

  #renderEvent = (event) => {
    const eventComponent = new TripEventView(event);
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
    eventComponent.setClickHandler(() => {
      replaceEventToEdit();
      document.addEventListener('keydown', onEscKeyDown);
    });
    editPointView.setEditClickHandler(() => {
      replaceEditToEvent();
      document.removeEventListener('keydown', onEscKeyDown);
    });
    editPointView.setFormSubmitHandler(() => {
      replaceEditToEvent();
      document.removeEventListener('keydown', onEscKeyDown);
    });

    render(eventComponent, this.#emptyListComponent.element);
  };
}

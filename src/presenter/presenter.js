import {render} from '../framework/render.js';
import SortView from '../view/sort-view.js';
import EmptyListView from '../view/empty-list-view.js';
import NoEventsView from '../view/no-events-view.js';
import TripEventPresenter from './trip-event-presenter.js';


export default class BoardPresenter {
  #emptyListComponent = new EmptyListView();
  #emptyEventsComponent = new NoEventsView();
  #sortTripEventsComponent = new SortView();
  #boardContainer = null;
  #eventsModel = null;
  #eventList = [];

  init = (boardContainer, eventsModel) => {
    this.#boardContainer = boardContainer;
    this.#eventsModel = eventsModel;
    this.#eventList = [...this.#eventsModel.events];
    this.#renderBoard();
  };

  #renderBoard = () => {
    if (this.#eventList.length === 0) {
      this.#renderEmptyEvents();
    } else {
      this.#renderSortTripComponent();
      this.#renderEmptyListComponent();
      for (let i = 0; i < this.#eventList.length; i++) {
        this.#renderEvent(this.#eventList[i]);
      }
    }
  };

  #renderEmptyListComponent = () => {
    render(this.#emptyListComponent, this.#boardContainer);
  };

  #renderSortTripComponent = () => {
    render(this.#sortTripEventsComponent, this.#boardContainer);
  };

  #renderEmptyEvents = () => {
    render(this.#emptyEventsComponent, this.#boardContainer);
  };

  #renderEvent = (event) => {
    const tripEventPresenter = new TripEventPresenter(this.#emptyListComponent.element);
    tripEventPresenter.init(event);
  };
}

import SortView from '../view/sort-view.js';
import addPointView from '../view/add-point-view.js';
import editPointView from '../view/edit-point-view.js';
import tripEventView from '../view/trip-event-view.js';
import {render} from '../render.js';
import EmptyListView from '../view/empty-list-view.js';

export default class BoardPresenter {
  emptyListComponent = new EmptyListView();

  init = (boardContainer, eventsModel) => {
    this.boardContainer = boardContainer;
    this.eventsModel = eventsModel;
    this.eventList = [...this.eventsModel.getEvents()];

    render(new SortView(), this.boardContainer);
    render(this.emptyListComponent, this.boardContainer);
    render(new editPointView(), this.emptyListComponent.getElement());
    render(new addPointView(), this.emptyListComponent.getElement());

    for (let i = 0; i < this.eventList.length; i++) {
      render(new tripEventView(this.eventList[i]), this.emptyListComponent.getElement());
    }

  };
}

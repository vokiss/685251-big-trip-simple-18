import SortView from '../view/sort-view.js';
import addPointView from '../view/add-point-view.js';
import editPointView from '../view/edit-point-view.js';
import tripEventView from '../view/trip-event-view.js';
import {render} from '../render.js';

export default class BoardPresenter {

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(new SortView(), boardContainer);
    render(new editPointView(), boardContainer);
    render(new addPointView(), boardContainer);

    for (let i = 0; i < 3; i++) {
      render(new tripEventView(), boardContainer);
    }

  };
}

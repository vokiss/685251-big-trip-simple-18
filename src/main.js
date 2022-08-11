<<<<<<< HEAD
import {render} from './render.js';
import NewFilterView from './view/form-create-view.js';

const bodyElement = document.querySelector('.page-body');
const tripMainElement = bodyElement.querySelector('.trip-main');

render(new NewFilterView(), tripMainElement);
=======
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';
import {render} from './render.js';
import editPointView from './view/edit-point-view.js';
import tripEventView from './view/trip-event-view.js';
import addPointView from './view/add-point-view.js';

const stripFiltersElement = document.querySelector('.trip-controls__filters');
const sortElement = document.querySelector('.trip-events');

render(new FilterView(), stripFiltersElement);
render(new SortView(), sortElement);
render(new editPointView(), sortElement);
render(new addPointView(), sortElement);
render(new tripEventView(), sortElement);
render(new tripEventView(), sortElement);
render(new tripEventView(), sortElement);
>>>>>>> a55886a23940c6d8a0ed874f14bdf0c6ef73ad1b

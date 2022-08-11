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

import {render} from './framework/render.js';
import FilterView from './view/filter-view.js';
import BoardPresenter from './presenter/presenter.js';
import EventsModel from './model/points-model.js';

const eventsModel = new EventsModel();
const stripFiltersElement = document.querySelector('.trip-controls__filters');
const sortElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter();
const filterView = new FilterView();

render(filterView, stripFiltersElement);
boardPresenter.init(sortElement, eventsModel);

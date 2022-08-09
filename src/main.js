import {render} from './render.js';
import NewFilterView from './view/form-create-view.js';

const bodyElement = document.querySelector('.page-body');
const tripMainElement = bodyElement.querySelector('.trip-main');

render(new NewFilterView(), tripMainElement);

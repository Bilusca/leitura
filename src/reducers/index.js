import { combineReducers } from 'redux';
import { categoriesReducer } from './category';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;

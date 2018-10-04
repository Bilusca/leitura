import { combineReducers } from 'redux';
import { categoriesReducer } from './category';
import { postReducer } from './post';
import { commentReducer } from './comment';
import { filterReducer } from './filter';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  postReducer,
  commentReducer,
  filterReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';
import { categoriesReducer } from './category';
import { postReducer } from './post';
import { commentReducer } from './comment';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  postReducer,
  commentReducer,
});

export default rootReducer;

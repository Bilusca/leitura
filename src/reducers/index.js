import { combineReducers } from 'redux';
import { categoriesReducer } from './category';
import { postReducer } from './post';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  posts: postReducer
});

export default rootReducer;

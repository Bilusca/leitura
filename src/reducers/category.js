import { FETCH_CATEGORIES } from './types';

export function categoriesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

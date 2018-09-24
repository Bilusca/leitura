import { FETCH_CATEGORIES } from '../reducers/types';
import { getAllCategories } from '../utils/API';

export const allCategories = categories => ({
  type: FETCH_CATEGORIES,
  categories,
});

export const fetchCategories = () => dispatch =>
  getAllCategories().then(categories => dispatch(allCategories(categories)));

import { FETCH_POSTS } from './types';

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts;
    default:
      return state;
  }
};

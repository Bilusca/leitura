import { FETCH_POSTS, FETCH_POST } from './types';

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts;
    case FETCH_POST:
      return state;
    default:
      return state;
  }
};

import { FETCH_POSTS, FETCH_POST } from './types';

export const postReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.posts.reduce((posts, post) => posts.concat(post), state);
    case FETCH_POST:
      return state;
    default:
      return state;
  }
};

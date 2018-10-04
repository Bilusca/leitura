import {
  FETCH_POSTS,
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POST_DETAIL,
} from './types';

const INITIAL_STATE = {
  postList: { posts: [] },
  activePost: { post: null },
};

export const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        postList: {
          posts: action.posts,
        },
      };
    case FETCH_POSTS_BY_CATEGORY:
      return {
        ...state,
        postList: {
          posts: action.posts,
        },
      };
    case FETCH_POST_DETAIL:
      return {
        ...state,
        activePost: {
          post: action.post,
        },
      };
    default:
      return state;
  }
};

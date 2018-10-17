import {
  FETCH_POSTS,
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POST_DETAIL,
  POST_MODAL_STATE,
  CREATE_POST,
  VOTE_POST,
} from './types';

const INITIAL_STATE = {
  postList: { posts: [] },
  activePost: { post: null },
  postModalState: false,
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
    case POST_MODAL_STATE:
      return {
        ...state,
        postModalState: action.bool,
      };
    case CREATE_POST:
      return {
        ...state,
        postList: {
          posts: [...state.postList.posts, action.payload],
        },
      };
    case VOTE_POST:
      
      return {
        ...state,
        postList: {
          posts: [
            ...state.postList.posts,
          ]
        }
      }
    default:
      return state;
  }
};

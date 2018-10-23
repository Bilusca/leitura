import {
  FETCH_POSTS,
  FETCH_POSTS_BY_CATEGORY,
  FETCH_POST_DETAIL,
  POST_MODAL_STATE,
  CREATE_POST,
  VOTE_POST,
  DELETE_POST,
} from './types';

const INITIAL_STATE = {
  postList: { posts: [] },
  activePost: { post: null },
  postModalState: false,
  activeCategory: null,
};

export const postReducer = (state = INITIAL_STATE, action) => {
  const { postList, activePost, activeCategory } = state;
  const { id } = action

  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        postList: {
          posts: action.posts,
        },
        activePost: {
          post: null,
        },
        activeCategory: null,
      };
    case FETCH_POSTS_BY_CATEGORY:
      return {
        ...state,
        postList: {
          posts: action.posts,
        },
        activePost: {
          post: null,
        },
        activeCategory: action.category,
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
        activePost: {
          post: null,
        },
      };
    case CREATE_POST:
      if (activeCategory ) {
        if(activeCategory === action.payload.category) {
          return {
            ...state,
            postList: {
              posts: [...postList.posts, action.payload],
            },
            activePost: {
              post: null,
            },
          };
        }

        return {
          ...state,
          postList: {
            posts: [...postList.posts],
          },
          activePost: {
            post: null,
          },
        };
      }

      return {
        ...state,
        postList: {
          posts: [...postList.posts, action.payload],
        },
        activePost: {
          post: null,
        },
      };
    case VOTE_POST:
      if (activePost.post) {
        return {
          ...state,
          activePost: {
            post: action.payload,
          },
        };
      }

      return {
        ...state,
        postList: {
          posts: postList.posts.map(post => {
            if (post.id === action.id) {
              post = action.payload;
            }

            return post;
          }),
        },
        activePost: {
          post: null,
        },
      };
    case DELETE_POST:
      return {
        ...state,
        postList: {
          posts: postList.posts.filter(post => post.id !== id)
        }
      }
    default:
      return state;
  }
};

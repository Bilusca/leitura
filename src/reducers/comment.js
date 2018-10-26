import {
  FETCH_COMMENT_BY_POST_ID,
  COMMENT_MODAL_STATE,
  CREATE_COMMENT,
  VOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from './types';

const INITIAL_STATE = {
  commentList: { comments: [] },
  commentModalState: false,
  editableComment: {},
};

export const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_COMMENT_BY_POST_ID:
      return {
        ...state,
        commentList: {
          comments: action.comments,
        },
      };
    case COMMENT_MODAL_STATE:
      const editable = Object.keys(action.editableComment).length
        ? action.editableComment
        : {};
      return {
        ...state,
        commentModalState: action.bool,
        editableComment: editable,
      };
    case CREATE_COMMENT:
      return {
        ...state,
        commentList: {
          comments: [...state.commentList.comments, action.comment],
        },
      };
    case VOTE_COMMENT:
      return {
        ...state,
        commentList: {
          comments: state.commentList.comments.map(comment => {
            if (comment.id === action.comment.id) {
              comment = action.comment;
            }

            return comment;
          }),
        },
      };
    case EDIT_COMMENT: 
      return {
        ...state,
        commentList: {
          comments: state.commentList.comments.map(comment => {
            if (comment.id === action.id) {
              comment = action.payload;
              return comment;
            }

            return comment;
          })
        }
      }
    case DELETE_COMMENT:
      return {
        ...state,
        commentList: {
          comments: state.commentList.comments.filter(
            comment => comment.id !== action.id
          ),
        },
      };
    default:
      return state;
  }
};

import {
  FETCH_COMMENT_BY_POST_ID,
  CREATE_COMMENT,
  COMMENT_MODAL_STATE,
  VOTE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
} from '../reducers/types';
import {
  getComments,
  createCommentApi,
  voteForComment,
  deleteCommentApi,
  editComentApi,
} from '../utils/API';

export const allComments = comments => ({
  type: FETCH_COMMENT_BY_POST_ID,
  comments,
});

export const createComment = comment => ({
  type: CREATE_COMMENT,
  comment,
});

export const changeCommentModalState = (bool, editableComment = {}) => ({
  type: COMMENT_MODAL_STATE,
  bool,
  editableComment,
});

export const voteCommentState = comment => ({
  type: VOTE_COMMENT,
  comment,
});

export const deleteCommentState = (id, payload) => ({
  type: DELETE_COMMENT,
  id,
  payload,
});

export const editCommentState = (id, payload) => ({
  type: EDIT_COMMENT,
  id,
  payload,
});

export const fetchCommentsById = postId => dispatch =>
  getComments(postId).then(data => dispatch(allComments(data)));

export const createCommentInApi = comment => dispatch =>
  createCommentApi(comment).then(data => dispatch(createComment(data)));

export const voteComment = (option, id) => dispatch =>
  voteForComment(option, id).then(data => dispatch(voteCommentState(data)));

export const deleteComment = id => dispatch =>
  deleteCommentApi(id).then(data => dispatch(deleteCommentState(id, data)));

export const editComment = (id, body, timestamp) => dispatch =>
  editComentApi(id, body, timestamp).then(data => dispatch(editCommentState(id, data)));

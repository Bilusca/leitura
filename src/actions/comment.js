import { FETCH_COMMENT_BY_POST_ID } from '../reducers/types';
import { getComments } from '../utils/API';

export const allComments = comments => ({
  type: FETCH_COMMENT_BY_POST_ID,
  comments,
});

export const fetchCommentsById = postId => dispatch =>
  getComments(postId).then(data => dispatch(allComments(data)));

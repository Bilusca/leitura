import {
  FETCH_POSTS,
  FETCH_POST_DETAIL,
  FETCH_POSTS_BY_CATEGORY,
  POST_MODAL_STATE,
  CREATE_POST,
  VOTE_POST,
  DELETE_POST,
  EDIT_POST,
} from '../reducers/types';
import {
  getAllPosts,
  getPostsByCategory,
  getPost,
  savePost,
  voteForPost,
  deletePostApi,
  editPostApi,
} from '../utils/API';

export const allPosts = posts => ({
  type: FETCH_POSTS,
  posts,
});

export const postByCategory = (posts, category) => ({
  type: FETCH_POSTS_BY_CATEGORY,
  posts,
  category,
});

export const postDetail = post => ({
  type: FETCH_POST_DETAIL,
  post,
});

export const changePostModalState = (bool, editablePost = {}) => ({
  type: POST_MODAL_STATE,
  bool,
  editablePost
});

export const savePostState = payload => ({
  type: CREATE_POST,
  payload,
});

export const editPostState = (id, payload) => ({
  type: EDIT_POST,
  id,
  payload,
})

export const postVoteState = (id, payload) => ({
  type: VOTE_POST,
  id,
  payload,
});

export const deletePostState = (id, payload) => ({
  type: DELETE_POST,
  id,
  payload,
});

export const fetchAllPosts = () => dispatch =>
  getAllPosts().then(posts => dispatch(allPosts(posts)));

export const fetchAllPostsByCategory = category => dispatch =>
  getPostsByCategory(category).then(posts =>
    dispatch(postByCategory(posts, category))
  );

export const fetchPostDetail = postId => dispatch =>
  getPost(postId)
    .then(post => dispatch(postDetail(post)))
    .catch(err => console.log(err));

export const savePostApi = post => dispatch =>
  savePost(post)
    .then(payload => dispatch(savePostState(payload)))
    .catch(error => console.log(error));

export const editPost = (id, title, body) => dispatch =>
    editPostApi(id, title, body).then(payload => dispatch(editPostState(id, payload)))

export const votePost = (id, vote) => dispatch =>
  voteForPost(id, vote).then(payload => dispatch(postVoteState(id, payload)));

export const deletePost = id => dispatch =>
  deletePostApi(id).then(payload => dispatch(deletePostState(id, payload)));


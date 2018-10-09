import {
  FETCH_POSTS,
  FETCH_POST_DETAIL,
  FETCH_POSTS_BY_CATEGORY,
  POST_MODAL_STATE,
  CREATE_POST,
} from '../reducers/types';
import { getAllPosts, getPostsByCategory, getPost, savePost } from '../utils/API';

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

export const changePostModalState = bool => ({
  type: POST_MODAL_STATE,
  bool,
});

export const savePostState = payload => ({
  type: CREATE_POST,
  payload
})

export const fetchAllPosts = () => dispatch =>
  getAllPosts().then(posts => dispatch(allPosts(posts)));

export const fetchAllPostsByCategory = category => dispatch =>
  getPostsByCategory(category).then(posts =>
    dispatch(postByCategory(posts, category))
  );

export const fetchPostDetail = postId => dispatch =>
  getPost(postId).then(post => dispatch(postDetail(post)));

export const savePostApi = post => dispatch =>
    savePost(post).then(payload => dispatch(savePostState(payload)))
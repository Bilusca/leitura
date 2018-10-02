import { FETCH_POSTS, FETCH_POST_DETAIL } from '../reducers/types';
import { getAllPosts, getPostsByCategory, getPost } from '../utils/API';

export const allPosts = posts => ({
  type: FETCH_POSTS,
  posts,
});

export const post = post => ({
  type: FETCH_POST_DETAIL,
  post,
});

export const fetchAllPosts = () => dispatch =>
  getAllPosts().then(posts => dispatch(allPosts(posts)));

export const fetchAllPostsByCategory = category => dispatch =>
  getPostsByCategory(category).then(posts => dispatch(allPosts(posts)));

export const fetchPostDetail = postId => dispatch =>
  getPost(postId).then(post => dispatch(post(post)));

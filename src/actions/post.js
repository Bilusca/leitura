import { FETCH_POSTS, FETCH_POST_DETAIL, FETCH_POSTS_BY_CATEGORY } from '../reducers/types';
import { getAllPosts, getPostsByCategory, getPost } from '../utils/API';

export const allPosts = posts => ({
  type: FETCH_POSTS,
  posts,
});

export const postByCategory = (posts, category) => ({
  type: FETCH_POSTS_BY_CATEGORY,
  posts,
  category,
})

export const postDetail = post => ({
  type: FETCH_POST_DETAIL,
  post,
});

export const fetchAllPosts = () => dispatch =>
  getAllPosts().then(posts => dispatch(allPosts(posts)));

export const fetchAllPostsByCategory = category => dispatch =>
  getPostsByCategory(category).then(posts => dispatch(postByCategory(posts, category)));

export const fetchPostDetail = postId => dispatch =>
  getPost(postId).then(post => dispatch(postDetail(post)));

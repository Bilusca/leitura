import { FETCH_POSTS } from '../reducers/types';
import { getAllPosts, getPost } from '../utils/API';

export const allPosts = posts => ({
  type: FETCH_POSTS,
  posts,
});

export const fetchAllPosts = () => dispatch =>
  getAllPosts().then(posts => dispatch(allPosts(posts)));

export const fetchAllPostsByCategory = category => dispatch =>
  getPost(category).then(posts => dispatch(allPosts(posts)));

import { FETCH_POSTS } from '../reducers/types'
import { getAllPosts } from '../utils/API';

export const allPosts = posts => ({
    type: FETCH_POSTS,
    posts
})

export const fetchAllPosts = () => dispatch => 
    getAllPosts().then( posts => dispatch(allPosts(posts)))
const api = 'http://localhost:3001';

let token = localStorage.token;
if (!token)
  token = localStorage.token = Math.random()
    .toString(36)
    .substr(-8);

const headers = {
  'Content-Type': 'application/json',
  Authorization: token,
};

export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPostsByCategory = category =>
  fetch(`${api}/${category}/posts`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getPost = postId =>
  fetch(`${api}/posts/${postId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

export const savePost = post => {
  return fetch(`${api}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(post),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));
};

export const voteForPost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify( {option} ),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));

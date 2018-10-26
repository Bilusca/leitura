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

export const savePost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(post),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));

export const editPostApi = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({ title, body }),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));

export const voteForPost = (id, option) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ option }),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));

export const deletePostApi = id =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers: headers,
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));

export const getComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getCommentById = id =>
  fetch(`${api}/comments/${id}`)
    .then(res => res.json())
    .then(data => data);

export const createCommentApi = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(comment),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));

export const voteForComment = (option, id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ option }),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));

export const deleteCommentApi = id =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers: headers,
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));

export const editComentApi = (id, body, timestamp) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers: headers,
    body: JSON.stringify({ body, timestamp }),
  })
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.dir(err));

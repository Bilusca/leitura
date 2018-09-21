const api = 'http://localhost:3001'

let token = localStorage.token
if(!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'aplication/json',
    'Authorization': token
}

export const getAllCategories = () => 
    fetch(`${api}/categories`, { headers })
        .then(res => res.json())
        .then(data => data.categories)
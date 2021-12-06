const BASE_URL = '/api/posts';

export function getAll() {
    return fetch(BASE_URL).then(res => res.json());
}

export function create(newPostData) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers:{ 'content-type': 'application/json'},
        body: JSON.stringify(newPostData),
    }).then(res => res.json());
}
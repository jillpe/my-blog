import {getToken} from './users-service';

const BASE_URL = '/api/posts';

export function getAll() {
    return fetch(BASE_URL).then(res => res.json());
}

export function create(newPostData) {
    const token = getToken();


    return fetch(BASE_URL, {
        method: 'POST',
        headers:{ 'content-type': 'application/json',
        'Authorization': `Bearer ${token}`},
        body: JSON.stringify(newPostData),
    }).then(res => res.json());
}
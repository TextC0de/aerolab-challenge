import axios from 'axios';

export const API_URI = 'https://coding-challenge-api.aerolab.co';

export const baseAxios = axios.create({
    baseURL: API_URI,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: process.env.NEXT_PUBLIC_API_TOKEN
    }
});

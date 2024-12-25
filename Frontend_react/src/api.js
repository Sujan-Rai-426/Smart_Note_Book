

// axious interceptor for token
// it will check if request have access token or not and if we do it will automatically add token to every request

import axios from 'axios';
import { ACCESS_TOKEN } from './constants';


// Check the Vite build mode (development or production)
const isProduction = import.meta.env.MODE === 'production';

// Select the correct API URL based on the environment
const apiUrl = isProduction ? import.meta.env.VITE_API_URL_PROD : import.meta.env.VITE_API_URL_LOCAL;

// Create the axios instance with the selected base URL
const api = axios.create({
    baseURL: apiUrl
});


api.interceptors.request.use(

        // if we have access token we will add it to every request as an authorization header
    (config) => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },

        // if we dont have access token we will return the request as it is
    (error) => {
        return Promise.reject(error);
    }
)


export default api;
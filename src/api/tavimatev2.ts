import axios from 'axios';
import { BASE_API_URLV2 } from '../utils/endpoint';

const travimatev2 = axios.create({
    baseURL: BASE_API_URLV2,
    headers: {
        Authorization: '',
    }
});

travimatev2.interceptors.request.use(
    (config) => {
        const access_token = localStorage.getItem("access_token");
        if (access_token) {
            config.headers.Authorization = `Bearer ${access_token}`;
        }
        return config;
    },
    (error) => {
        if (error.response && error.response.status === 401) {
            window.location.href = '/signin';
        }
        return Promise.reject(error);
    }
);

travimatev2.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default travimatev2;
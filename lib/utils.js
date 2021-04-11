import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.polen.com.br/api/v2',
});

export default api;


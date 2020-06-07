import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://blog-app-beb36.firebaseio.com/'
});

export default instance;
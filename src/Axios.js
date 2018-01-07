import axios from 'axios';

const instance = axios.create({
    baseURL:'https://ang-http.firebaseio.com/'
});

export default instance;
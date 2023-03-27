import axios from 'axios'

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.get['Content-Type'] ='application/json;charset=utf-8';

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/`,
})

export default api


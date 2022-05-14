import axios from 'axios';

const api = axios.create({
    baseURL: 'https://tiao.supliu.com.br/api/',

});
api.defaults.headers.common['Authorization'] = 'giovanasouzaduarte@gmail.com';




export default api;
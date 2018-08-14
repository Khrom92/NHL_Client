import axios from 'axios';

axios.interceptors.request.use(function (config) {
    // делаем что угодно перед запросом
    config.headers['Content-type'] = 'application/x-www-form-urlencoded';
    config.headers['x-access-token'] = localStorage.getItem('token');

    console.log('это конфиг' ,config.headers);
    return config;
}, function (error) {
    // обрабатываем ошибку
    return Promise.reject(error);
});

export default axios
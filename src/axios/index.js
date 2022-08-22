import axios from 'axios';

const axiosApiInstance = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

axiosApiInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

export default axiosApiInstance;

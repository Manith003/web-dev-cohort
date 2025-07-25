import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/', 
})


// Add a request interceptor
instance.interceptors.request.use(function (config) {
    console.log('Request was sent', config);
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    console.log('Response was sent', response);
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  export default instance;
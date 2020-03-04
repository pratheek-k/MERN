import axios from 'axios';
import { TokenService } from './index';
import history from './history.service';

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

const requestIntercept = config => {
  if (config.headers['Skip-Auth'] && config.headers['Skip-Auth'] === true) {
    return config;
  }

  config.headers.Authorization = TokenService.getAuthToken();

  return config;
}

const requestError = error => {
  return Promise.reject(error);
}

const responseSuccess = response => response.data;

const redirectTo = (document, path) => {
  document.location = path;
}

const responseError = error => {
  console.log(error);
  switch (error.response.status) {
    case 400:
      console.log('400 error response', error);
      break;
    case 401:
      console.log('401 error response', error);
      history.push({
        pathname: '/error',
        state: {
          title: 'Unauthorized',
          message: 'You are not authorized to see this page',
          login: true,
          isBack: false
        }
      })
      break;
    case 404:
      console.log('404 error response', error);
      redirectTo(document, '404');
      break;
    default:
      console.log('Default error response', error);
      redirectTo(document, '404');
      break;
  }

  return Promise.reject(error);
}

Axios.interceptors.request.use(requestIntercept, requestError);
Axios.interceptors.response.use(responseSuccess, responseError);

export default Axios;
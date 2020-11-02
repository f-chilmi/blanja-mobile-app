import {default as axios} from 'axios';
import {API_URL} from '@env';

const http = (token = null) => {
  return axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
  });
};

export default http;

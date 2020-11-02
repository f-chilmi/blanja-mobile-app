import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getAddress: (token) => {
    return {
      type: 'GET_ADDRESS',
      payload: http(token).get('/users/address'),
    };
  },
  addAddress: (token, data) => {
    return {
      type: 'ADD_ADDRESS',
      payload: http(token).post('/users/address', qs.stringify(data)),
    };
  },
};

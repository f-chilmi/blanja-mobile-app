import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getProfile: (token) => {
    return {
      type: 'GET_PROFILE',
      payload: http(token).get('/users'),
    };
  },
  updateProfile: (token, data) => {
    return {
      type: 'UPDATE_PROFILE',
      payload: http(token).patch('/users', qs.stringify(data)),
    };
  },
  updateImage: (token, form) => ({
    type: 'UPDATE_PROFILE',
    payload: http(token).patch('/users', form)
  }),
  changePassword: (token, data) => ({
    type: 'CHANGE_PASSWORD',
    payload: http(token).patch('/users/password', qs.stringify(data))
  })
};

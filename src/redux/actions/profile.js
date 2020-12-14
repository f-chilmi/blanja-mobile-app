import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getProfile: (token) => {
    return {
      type: 'GET_PROFILE',
      payload: http(token).get('/user'),
    };
  },
  updateProfile: (token, data) => {
    return {
      type: 'UPDATE_PROFILE_INFO',
      payload: http(token).patch('/user', qs.stringify(data)),
    };
  },
  updateImage: (token, form) => ({
    type: 'UPDATE_PROFILE_IMAGE',
    payload: http(token).patch('/user/update-picture', form),
  }),
  changePassword: (token, data) => ({
    type: 'CHANGE_PASSWORD',
    payload: http(token).post('/user/change-password', qs.stringify(data)),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};

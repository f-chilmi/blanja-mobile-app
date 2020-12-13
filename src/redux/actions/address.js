import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getAddress: (token) => {
    return {
      type: 'GET_ADDRESS',
      payload: http(token).get('/user/address'),
    };
  },
  addAddress: (token, data) => {
    return {
      type: 'ADD_ADDRESS',
      payload: http(token).post('/user/address', qs.stringify(data)),
    };
  },
  editPrimary: (token, id, data) => {
    return {
      type: 'EDIT_ADDRESS',
      payload: http(token).patch(
        `/user/address/primary/${id}`,
        qs.stringify(data),
      ),
    };
  },
  editAddress: (token, id, data) => {
    return {
      type: 'EDIT_ADDRESS',
      payload: http(token).patch(
        `/user/address/edit/${id}`,
        qs.stringify(data),
      ),
    };
  },
  logout: () => ({
    type: 'LOGOUT',
  }),
};

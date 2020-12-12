import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getCart: (token) => {
    return {
      type: 'GET_CART',
      payload: http(token).get('/cart'),
    };
  },
  postCart: (token, data) => {
    return {
      type: 'POST_CART',
      payload: http(token).post('/cart', qs.stringify(data)),
    };
  },
  updateCart: (token, data) => {
    return {
      type: 'UPDATE_CART',
      payload: http(token).patch('/cart', qs.stringify(data)),
    };
  },
  deleteCart: (token, id) => ({
    type: 'DELETE_CART',
    payload: http(token).delete(`/cart/${id}`),
  }),
};

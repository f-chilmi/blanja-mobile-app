import http from '../../helpers/http';
import qs from 'querystring';

export default {
  getCheckout: (token) => {
    return {
      type: 'CHECKOUT',
      payload: http(token).get('/checkout'),
    };
  },
  payment: (token) => {
    return {
      type: 'PAYMENT',
      payload: http(token).get('/checkout/balance'),
    };
  },
  addOrder: (token, data) => ({
    type: 'ADD_ORDER',
    payload: http(token).post('/checkout/order', qs.stringify(data)),
  }),
  showOrder: (token) => ({
    type: 'SHOW_ORDER',
    payload: http(token).get('/checkout/order'),
  }),
  logout: () => ({
    type: 'LOGOUT',
  }),
};

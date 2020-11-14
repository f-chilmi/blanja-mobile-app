import http from '../../helpers/http';

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
      payload: http(token).get('/checkout/payments'),
    };
  },
};

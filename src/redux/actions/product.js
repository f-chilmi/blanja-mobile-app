import http from '../../helpers/http';

export default {
  getData: (id) => ({
    type: 'GET_PRODUCT',
    payload: http().get(`/public/${id}`),
  }),
  increaseCount: {
    type: 'INCREASE_COUNTER',
  },
  decreaseCount: {
    type: 'DECREASE_COUNTER',
  },
};

import http from '../../helpers/http';

export default {
  getData: (id) => ({
    type: 'GET_DATA',
    payload: http().get(`/public/items/${id}`),
  }),
  increaseCount: {
    type: 'INCREASE_COUNTER'
  },
  decreaseCount: {
    type: 'DECREASE_COUNTER'
  }
}
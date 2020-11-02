import http from '../../helpers/http';


export default {
  getData: () => ({
    type: 'GET_DATA',
    payload: http().get('/public?limit=12&sort[updated_at]=desc'),
  }),
  getPopular: () => {
    return {
      type: 'POPULAR',
      payload: http().get('/public?limit=12&sort[rating]=desc'),
    };
  },
  getCategory: () => {
    return {
      type: 'CATEGORY_LIST',
      payload: http().get('/public/subcategory'),
    };
  },
};

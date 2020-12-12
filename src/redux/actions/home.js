import http from '../../helpers/http';

export default {
  getData: () => ({
    type: 'GET_DATA',
    payload: http().get('/public?limit=5'),
  }),
  getPopular: () => {
    return {
      type: 'POPULAR',
      payload: http().get('/public?limit=5&sort[updatedAt]=desc'),
    };
  },
  getCategory: () => {
    return {
      type: 'CATEGORY_LIST',
      payload: http().get('/public/categories'),
    };
  },
  getAll: () => {
    return {
      type: 'ALL_DATA',
      payload: http().get('/public?limit=100&sort[updatedAt]=desc'),
    };
  },
  categoryDetail: (id = '') => {
    return {
      type: 'GET_CATALOG',
      payload: http().get(
        `public?sort[updatedAt]=desc&search[id_category]=${id}`,
      ),
    };
  },
  nextAndPrevLinkCatalog: (url) => ({
    type: 'GET_CATALOG',
    payload: http().get(`${url}`),
  }),
  refreshCatalog: () => ({
    type: 'REFRESH_CATALOG',
    payload: http().get('/public'),
  }),
  sortPopular: () => {
    return {
      type: 'GET_CATALOG',
      payload: http().get('/public?limit=5&sort[rating]=desc'),
    };
  },
  searchItem: (search = '') => ({
    type: 'GET_SEARCH',
    payload: http().get(`/public?search[name]=${search}`),
  }),
  sort: (adv = 'sort[updatedAt]=desc', search = '') => ({
    type: 'GET_CATALOG',
    payload: http().get(`/public?${adv}&${search}`),
  }),
};

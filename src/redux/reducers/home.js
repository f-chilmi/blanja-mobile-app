const initialState = {
  data: [],
  dataAll: [],
  dataPopular: [],
  allData: [],
  categoryList: [],
  dataCatalog: [],
  successGetCategory: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  info: [],
  dataNext: [],
  url: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_DATA_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_DATA_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataAll: action.payload.data.info.findProduct.rows,
      };
    }
    case 'GET_SEARCH_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_SEARCH_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_SEARCH_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataSearch: action.payload.data.info.findProduct.rows,
        alertMsg: '',
      };
    }
    case 'POPULAR_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'POPULAR_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'POPULAR_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataPopular: action.payload.data.info.findProduct.rows,
        alertMsg: '',
      };
    }
    case 'CATEGORY_LIST_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CATEGORY_LIST_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'CATEGORY_LIST_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        categoryList: action.payload.data.categories,
        successGetCategory: true,
      };
    }
    case 'ALL_DATA_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ALL_DATA_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'ALL_DATA_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        allData: action.payload.data.info,
      };
    }
    case 'GET_CATALOG_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CATALOG_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_CATALOG_FULFILLED': {
      const {rows} = action.payload.data.info.findProduct;
      const newData = [...state.dataCatalog, ...rows];
      return {
        ...state,
        isError: false,
        url: action.payload.config.url,
        dataCatalog: newData,
        info: action.payload.data.info.pageInfo,
        alertMsg: '',
        isLoading: false,
      };
    }
    case 'REFRESH_CATALOG_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'REFRESH_CATALOG_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'REFRESH_CATALOG_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataCatalog: action.payload.data.info.findProduct,
        info: action.payload.data.info.pageInfo,
      };
    }
    default: {
      return state;
    }
  }
};

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
        dataAll: action.payload.data.info,
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
        dataPopular: action.payload.data.info,
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
        categoryList: action.payload.data.data,
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
      return {
        ...state,
        isLoading: false,
        isError: false,
        dataCatalog: action.payload.data.info,
      };
    }
    default: {
      return state;
    }
  }
};

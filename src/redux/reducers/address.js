const initialState = {
  data: {},
  dataAddress: {},
  isLogin: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data.find,
        alertMsg: action.payload.data.message,
      };
    }
    case 'ADD_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'ADD_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        dataAddress: action.payload.data,
        alertMsg: 'New address added',
      };
    }
    case 'EDIT_ADDRESS_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'EDIT_ADDRESS_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'EDIT_ADDRESS_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
      };
    }
    case 'LOGOUT': {
      return {
        data: {},
        dataAddress: {},
        isLogin: false,
        isLoading: false,
        isError: false,
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};

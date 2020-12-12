const initialState = {
  data: {},
  isLogin: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  alertOpen: false,
  successAdd: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'GET_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'GET_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data.data,
        successAdd: false,
        alertMsg: 'Success get data',
      };
    }
    case 'POST_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'POST_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'POST_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        alertMsg: 'Success added to cart',
        alertOpen: true,
        successAdd: action.payload.data,
      };
    }
    case 'UPDATE_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'UPDATE_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'UPDATE_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        alertMsg: 'Success update cart',
        alertOpen: true,
        successAdd: true,
      };
    }
    case 'DELETE_CART_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'DELETE_CART_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'DELETE_CART_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        alertMsg: 'Success delete item from cart',
      };
    }
    default: {
      return state;
    }
  }
};

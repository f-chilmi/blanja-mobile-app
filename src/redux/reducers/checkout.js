const initialState = {
  data: {},
  dataPayment: {},
  isLogin: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHECKOUT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'CHECKOUT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'CHECKOUT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data,
      };
    }
    case 'PAYMENT_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'PAYMENT_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'PAYMENT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        dataPayment: action.payload.data,
      };
    }
    case 'ADD_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'ADD_ORDER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'ADD_ORDER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        addOrder: action.payload.data,
        alertMsg: 'Success add new order',
      };
    }
    case 'SHOW_ORDER_PENDING': {
      return {
        ...state,
        isLoading: true,
      };
    }
    case 'SHOW_ORDER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data',
      };
    }
    case 'SHOW_ORDER_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        history: action.payload.data.order,
        alertMsg: 'Success get data',
      };
    }
    case 'LOGOUT': {
      return {
        data: {},
        dataPayment: {},
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

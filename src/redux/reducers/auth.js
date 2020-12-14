const initialState = {
  isLoading: false,
  isLogin: false,
  isError: false,
  errorMsg: '',
  token: '',
  alertMsg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER_PENDING': {
      return {
        ...state,
        isLoading: true,
        alertMsg: 'login loading',
      };
    }
    case 'AUTH_USER_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: action.payload.data.token.message,
      };
    }
    case 'AUTH_USER_FULFILLED': {
      // localStorage.setItem('token', action.payload.data.token)
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        token: action.payload.data.token,
        alertMsg: '',
      };
    }
    case 'SET_TOKEN': {
      return {
        ...state,
        token: action.payload.token,
        isLoading: false,
        isLogin: true,
      };
    }
    case 'SIGNUP_PENDING': {
      return {
        ...state,
        isLoading: true,
        alertMsg: 'register loading',
      };
    }
    case 'SIGNUP_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Failed register new account',
      };
    }
    case 'SIGNUP_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        alertMsg: action.payload.data.message,
      };
    }
    case 'LOGOUT': {
      // localStorage.removeItem('token')
      return {
        isLoading: false,
        isLogin: false,
        isError: false,
        errorMsg: '',
        token: '',
        alertMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};

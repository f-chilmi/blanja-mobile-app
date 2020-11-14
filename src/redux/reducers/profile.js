const initialState = {
  data: {},
  isLogin: false,
  isLoading: false,
  isError: false,
  alertMsg: '',
  successUpdate: false
}

export default (state=initialState, action)=>{
  switch(action.type){
    case 'GET_PROFILE_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'GET_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'GET_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        data: action.payload.data.data[0]
      }
    }
    case 'UPDATE_PROFILE_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'UPDATE_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'There is an error at request data'
      }
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        alertMsg: 'Profile updated',
        successUpdate: true,
        data: action.payload.data,
      }
    }
    case 'CHANGE_PASSWORD_PENDING' : {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'CHANGE_PASSWORD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        alertMsg: 'Failed change password'
      }
    }
    case 'CHANGE_PASSWORD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        alertMsg: 'Password changed',
        successUpdate: true,
        data: action.payload.data,
      }
    }
    default : {
      return state
    }
  }
}
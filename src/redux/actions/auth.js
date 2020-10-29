import http from '../../helpers/http'
import qs from 'querystring'

const {REACT_APP_BACKEND_URL} = process.env

export default {
  login: (data) => ({
    type: 'AUTH_USER',
    payload: http().post(`${REACT_APP_BACKEND_URL}/auth/login`, qs.stringify(data))
  }),
  setToken: (token) => ({
    type: 'SET_TOKEN',
    payload: { token }
  }),
  signup: (data) => ({
    type: 'SIGNUP',
    payload: http().post(`${REACT_APP_BACKEND_URL}/auth/signup`, qs.stringify(data))
  }),
  logout: () => ({
    type: 'LOGOUT'
  })
}
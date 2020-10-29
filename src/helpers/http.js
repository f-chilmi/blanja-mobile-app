import {default as axios} from 'axios'

import {REACT_APP_BACKEND_URL} from "@env"

const http = (token=null)=>{
  return axios.create({
    baseURL: REACT_APP_BACKEND_URL,
    headers: {
      'Authorization': token? `Bearer ${token}` : undefined
    }
  })
}

export default http
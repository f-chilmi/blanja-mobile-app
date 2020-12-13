import {combineReducers} from 'redux';

import auth from './auth';
import home from './home';
import profile from './profile';
import address from './address';
import cart from './cart';
import checkout from './checkout';
import product from './product';

export default combineReducers({
  auth,
  home,
  profile,
  address,
  cart,
  checkout,
  product,
});

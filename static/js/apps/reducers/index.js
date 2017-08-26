import { combineReducers } from 'redux';

import itemsList from './itemsReducer';
import cartItems from './cartItemsReducer';

const rootReducer = combineReducers({
  itemsList,
  cartItems
})

export  default rootReducer;

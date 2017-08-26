import { combineReducers } from 'redux';

import itemsList from './itemsReducer';
import cartItems from './cartItemsReducer';
import cartAmount from './amountReducer';

const rootReducer = combineReducers({
  itemsList,
  cartItems,
  cartAmount
})

export  default rootReducer;

import { ADD_ITEM, REMOVE_ITEM } from '../actions';
import addToCart from './helper';

export default function cartItems(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      let cartItems = [...state, addToCart(action.id)];
      return cartItems;
    case REMOVE_ITEM:
      let items = state.filter(item=>item.id != action.id);
      return items;
    default:
      return state;
  }
}

import { ADD_ITEM, REMOVE_ITEM } from '../actions';
import productsList from '../../../../data/mock.json';
import addToCart from './helper';

export default function itemsList(state = productsList.catalog, action) {
  switch(action.type) {
    case ADD_ITEM:
      let items = state.filter(item=>item.id != action.id);
      return items;
    case REMOVE_ITEM:
      let cartItems = [...state, addToCart(action.id)];
      return cartItems;
    default:
      return state;
  }
}

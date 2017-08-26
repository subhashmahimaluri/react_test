import { ADD_MONEY, REMOVE_MONEY } from '../actions';
import addToCart from './helper';

export default function cartAmount(state=0, action) {
  switch(action.type) {
    case ADD_MONEY:
      return state + action.amount;
    case REMOVE_MONEY:
      return state - action.amount;
    default:
      return state;
  }
}

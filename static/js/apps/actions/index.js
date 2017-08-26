export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const ADD_MONEY = 'ADD_MONEY';
export const REMOVE_MONEY = 'REMOVE_MONEY';

export function addItemById(id) {
  const action = {
    type: ADD_ITEM,
    id
  };

  return action;
}

export function removeItemById(id) {
  const action = {
    type: REMOVE_ITEM,
    id
  };

  return action;
}

export function addMoney(amount) {
  const action = {
    type: ADD_MONEY,
    amount
  };

  return action;
}

export function removeMoney(amount) {
  const action = {
    type: REMOVE_MONEY,
    amount
  };

  return action;
}

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

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

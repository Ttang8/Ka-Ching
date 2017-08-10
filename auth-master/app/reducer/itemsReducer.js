import { RECEIVE_ITEMS } from '../actions/itemActions';

const defaultState = [];

const itemsReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_ITEMS:
      return action.items;
    default:
      return state;
  }
}

export default itemsReducer;
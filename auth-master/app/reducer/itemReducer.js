import { RECEIVE_ITEM } from '../actions/itemActions';

const defaultState = {
  title: '',
  description: '',
  image_url: '',
  user_id: null,
  price: null,
  location: ''
};

const itemReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_ITEM:
      return Object.assign({}, action.item.data);
    default:
      return state;
  }
};

export default itemReducer;

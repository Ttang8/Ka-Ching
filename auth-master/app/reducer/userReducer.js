import { RECEIVE_USER } from '../actions/userActions';

const defaultState = {
  user_id: '',
  buy: [],
  sell: [],
  email: ''
};

const userReducer = (state=defaultState,action) => {
  switch(action.type){
    case RECEIVE_USER:
      return Object.assign({}, action.user)
    default:
      return state;
  }
};

export default userReducer;

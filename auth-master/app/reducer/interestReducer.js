import { RECEIVE_INTEREST } from '../actions/interestActions';

const defaultState = [];

const interestReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_INTEREST:
      return action.buyItems;
    default:
      return state;
  }
}
import {RECEIVE_ERRORS, CLEAR_ERRORS} from '../actions/authActions';

const nullErrors = [];

const errorsReducer = (state=nullErrors, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return [errors];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;

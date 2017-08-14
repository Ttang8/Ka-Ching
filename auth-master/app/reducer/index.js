import uuid from 'uuid';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer';
import alertsReducer from './alertsReducer';
import todosReducer from './todosReducer';
import errorsReducer from './errorsReducer';
import itemsReducer from './itemsReducer';
import itemReducer from './itemReducer';
import userReducer from './userReducer';
import interestReducer from './interestReducer';



module.exports = combineReducers({
  form: formReducer,
  auth: authReducer,
  alerts: alertsReducer,
  todos: todosReducer,
  errors: errorsReducer,
  items: itemsReducer,
  item: itemReducer,
  user: userReducer,
  interests: interestReducer
});

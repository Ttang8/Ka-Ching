import uuid from 'uuid';
import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import authReducer from './authReducer';
import alertsReducer from './alertsReducer';
import todosReducer from './todosReducer';
import itemsReducer from './itemsReducer';
import itemReducer from './itemReducer';

module.exports = combineReducers({
  form: formReducer,
  auth: authReducer,
  alerts: alertsReducer,
  todos: todosReducer,
  items: itemsReducer,
  item: itemReducer
});

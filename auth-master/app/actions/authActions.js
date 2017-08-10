import axios from 'axios';

import {SIGNIN_URL, SIGNUP_URL} from '../api';
import {addAlert} from './alertsActions';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// exports.loginUser = (email,password) => {
//   return function(dispatch){
//     return axios.post(SIGNIN_URL, {email, password}).then((response)=>{
//       var {user_id, token} = response.data;
//       dispatch(addAlert(token));
//       dispatch(authUser(user_id));
//     }).catch((error)=>{
//       dispatch(addAlert("Could not log in."));
//     });
//   };
// };

export const loginUser = (email, password) => dispatch => (
  axios.post(SIGNIN_URL, {email, password}).then(response => console.log(response.data))
);

export const signupUser = (email, password) => dispatch => (
  axios.post(SIGNUP_URL, {email, password}).then(response => console.log(response.data))
);

// exports.signupUser = (email,password) => {
//   return function(dispatch){
//     return axios.post(SIGNUP_URL, {email, password}).then((response)=>{
//       var {user_id, token} = response.data;
//       dispatch(addAlert(token));
//       dispatch(authUser(user_id));
//     }).catch((error)=>{
//       dispatch(addAlert("Could not sign up."));
//     });
//   };
// };

let authUser = (user_id) => {
  return {
    type: 'AUTH_USER',
    user_id
  };
};

exports.unauthUser = {
  type: 'UNAUTH_USER'
};

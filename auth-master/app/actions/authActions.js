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

export const loginUser = (email, password) => dispatch => {
  return axios.post(SIGNIN_URL, {email, password})
    .then(function(response) {
      console.log(response.data);
      let { token } = response.data;
      dispatch(addAlert(token));
      dispatch(authUser(response.data));
  })
    .catch(function (error) {
      // dispatch(addAlert("Could not sign in."));
      dispatch(receiveErrors("Authentication Failed"));
    });
};

export const signupUser = (email, password) => dispatch => {
  return axios.post(SIGNUP_URL, {email, password})
  .then(function(response) {
    let { user_id, token } = response.data;
    // dispatch(addAlert(token));
    dispatch(authUser(response.data));
  })
    .catch(function() {
      // dispatch(addAlert("Could not sign up."));
      dispatch(receiveErrors(arguments[0].response.data.errors));
    });
};

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

import * as APIUtil from '../api/api_util_users';


// async

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
    .then(user => (
      dispatch(authUser(user))
    )
    )
);

export const deleteUser = id => dispatch => (
  APIUtil.deleteUser(id)
    .then(() => (
      dispatch(deleteUser(id))
    ))
    .then(() => (
      dispatch(authUser(null))
    ))
);

export const editUser = user => dispatch => (
  APIUtil.editUser(user)
    .then(user => {
       (user);
      return dispatch(authUser(user))
    })
)

let authUser = (user) => {
  return {
    type: 'AUTH_USER',
    user
  };
};

exports.unauthUser = {
  type: 'UNAUTH_USER'
};

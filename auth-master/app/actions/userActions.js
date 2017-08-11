import * as APIUtil from '../api/api_util_users';

export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USERS = 'RECEIVE_USERS';

// sync

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});


// async

export const fetchUser = id => dispatch => (
  APIUtil.fetchUser(id)
    .then(user => (
      dispatch(receiveUser(user))
    )
  )
);

export const deleteUser = id => dispatch => (
  APIUtil.deleteUser(id)
    .then(()=> (
      dispatch(deleteUser(id))
    ))
    .then(()=> (
      dispatch(receiveUser(null))
    ))
);

export const editUser = user => dispatch => (
  APIUtil.editUser(user)
    .then(user => (
      dispatch(receiveUser(user))
    ))
)
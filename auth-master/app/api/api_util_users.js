import axios from 'axios';

export const fetchUser = id => (
  axios({
    method: 'GET',
    url: `https://fierce-taiga-51990.herokuapp.com/api/users/${id}`
  })
);

export const editUser = user => (
  axios({
    method: 'PUT',
    url: `https://fierce-taiga-51990.herokuapp.com/api/users/${user.user_id}`,
    data: user
  })
);


export const deleteUser = id => (
  axios({
    method: 'DELETE',
    url: `https://fierce-taiga-51990.herokuapp.com/api/users/${id}`
  })
);

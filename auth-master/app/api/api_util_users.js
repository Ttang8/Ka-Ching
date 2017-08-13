import axios from 'axios';

export const fetchUser = id => (
  axios({
    method: 'GET',
    url: `http://localhost:3000/api/users/${id}`
  })
);

export const editUser = user => (
  axios({
    method: 'PUT',
    url: `http://localhost:3000/api/users/${user.user_id}`,
    data: user
  })
);


export const deleteUser = id => (
  axios({
    method: 'DELETE',
    url: `http://localhost:3000/api/users/${id}`
  })
);

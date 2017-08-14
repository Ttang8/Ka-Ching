var defaultState = {
  user_id: undefined,
  buy: [],
  sell: [],
  email: ''
};

module.exports = (state=defaultState,action) => {
  switch(action.type){
    case 'AUTH_USER':
      return Object.assign({}, action.user);
    case 'UNAUTH_USER':
      return {
        user_id: undefined
      };
    default:
      return state;
  }
};

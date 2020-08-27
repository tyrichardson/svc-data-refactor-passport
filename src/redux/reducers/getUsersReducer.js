const getUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS_REDUCER' :
      console.log('GetUsersReducer');
      return action.payload;
    default:
      return state;
  }
}

export default getUsersReducer;
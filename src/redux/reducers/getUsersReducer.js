const getUsersReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USERS_REDUCER' :
      console.log('GetUsersReducer ', action.payload);
      return action.payload;
    default:
      return state;
  }
}

export default getUsersReducer;
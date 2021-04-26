//abhishek360

const STATE = {
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXItMCIsImV4cCI6MTYyNzIwMjc4MH0.uDgA0xSBaNqtqWP1XsSnYB8KKXTpYidgSwanx1c4HVU',
  username: 'User',
  loggedIn: true,
  isLoading: false,
};

export default (state = STATE, action) => {
  switch (action.type) {
    case 'SET_USER_DETAILS':
      console.log('fetch user details dispatched');
      return {
        ...state,
        ...action.user,
        isLoading: false,
      }

      case 'USER_LOGOUT':
        console.log('logout');
        return {
          ...state,
          username:'',
          token: '',
          loggedIn: false,
          isLoading: false,
        }

    default :
      return state;
  }
};

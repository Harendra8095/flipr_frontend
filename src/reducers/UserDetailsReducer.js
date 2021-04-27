//abhishek360

const STATE = {
  token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InVzZXItMCIsImV4cCI6MTYyNzI4NjQ5NX0.XUb8XdQjN_W7xQcZFY2a1dmyF8mJTi1guVXn1WN0M7E',
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

//abhishek360

const STATE = {
  token: '',
  username: 'User',
  loggedIn: false,
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

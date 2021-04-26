//abhishek360

const STATE = {
  control: 'home',
};

export default (state = STATE, action) => {
  switch (action.type) {

    case 'CHANGE_CONTROL':
      return {
        ...state,
        control: action.control,
      };

    default :
      return state;
  }
};

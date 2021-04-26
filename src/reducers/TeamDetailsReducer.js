//abhishek360

const STATE = {
  matchId: '',
  team: [],
  credit_spent: 0,
  error: '',
  isLoading: false,
};

export default (state = STATE, action) => {
  switch (action.type) {
    case 'FETCH_TEAM_DETAILS':
      console.log('fetch team Details dispatched');
      return {
        ...state,
        ...STATE,
        matchId : action.query,
        isLoading: true,
      }

    case 'FETCH_TEAM_DETAILS_SUCCESS':
      console.log('fetch team Details success');

      return {
        ...state,
        ...action.payload,
        matchId : action.query,
        isLoading: action.isLoading,
      };

    case 'FETCH_TEAM_DETAILS_FAILURE':
      console.log('put list all failure');
      return {
        ...state,
        error : action.message,
        status: 'failed',
        isLoading: action.isLoading,
      }

    case 'FETCH_TEAM_DETAILS_ERROR':
      console.log('put list all error', action);
      return {
        ...state,
        ...action.error,
        status: 'error',
        isLoading: action.isLoading,
      }

    default :
      return state;
  }
};

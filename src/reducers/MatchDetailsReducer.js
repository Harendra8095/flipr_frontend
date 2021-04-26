//abhishek360

const STATE = {
  matchId: '',
  playerList: [],
  error: '',
  isLoading: false,
};

export default (state = STATE, action) => {
  switch (action.type) {
    case 'FETCH_MATCH_DETAILS':
      console.log('fetch match Details dispatched');
      return {
        ...state,
        ...STATE,
        matchId : action.query,
        isLoading: true,
      }

    case 'FETCH_MATCH_DETAILS_SUCCESS':
      console.log('fetch match details success');
      return {
        ...state,
        playerList: action.payload,
        matchId : action.query,
        isLoading: action.isLoading,
      };

    case 'FETCH_MATCH_DETAILS_FAILURE':
      console.log('put list all failure');
      return {
        ...state,
        error : action.message,
        status: 'failed',
        isLoading: action.isLoading,
      }

    case 'FETCH_MATCH_DETAILS_ERROR':
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

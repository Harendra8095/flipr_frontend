//abhishek360

const STATE = {
    team: [],
    total_score:0,
    error: '',
    isLoading: false,
  };
  
  export default (state = STATE, action) => {
    switch (action.type) {
      case 'FETCH_MATCH_SCOREBOARD':
        console.log('fetch match score dispatched');
        return {
          ...state,
          ...STATE,
          isLoading: true,
        }
  
      case 'FETCH_MATCH_SCOREBOARD_SUCCESS':
        return {
          ...state,
          ...action.payload,
          isLoading: action.isLoading,
        };
  
      case 'FETCH_MATCH_SCOREBOARD_FAILURE':
        console.log('put list all failure');
        return {
          ...state,
          error : action.message,
          status: 'failed',
          isLoading: action.isLoading,
        }
  
      case 'FETCH_MATCH_SCOREBOARD_ERROR':
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
  
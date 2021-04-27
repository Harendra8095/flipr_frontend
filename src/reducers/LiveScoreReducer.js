//abhishek360

const STATE = {
    team: [],
    team1: '',
    team2: '',
    match_id: '',
    message: '',
    error: '',
  };
  
  export default (state = STATE, action) => {
    switch (action.type) {
      case 'FETCH_LIVE_SCORE':
        console.log('fetch live score dispatched');
        return {
          ...STATE,
          ...state,
        }
  
      case 'FETCH_LIVE_SCORE_SUCCESS':
        console.log('fetch live score success',action.payload);
        return {
          ...state,
          ...action.payload,
        };
  
      case 'FETCH_LIVE_SCORE_FAILURE':
        console.log('put list all failure');
        return {
          ...state,
          error : action.message,
          status: 'failed',

        }
  
      case 'FETCH_LIVE_SCORE_ERROR':
        console.log('put list all error', action);
        return {
          ...state,
          ...action.error,
          status: 'error',
        }
  
      default :
        return state;
    }
  };
  
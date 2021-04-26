//abhishek360

const STATE = {
  list: [],
  error: '',
  isLoading: false,
};

export default (state = STATE, action) => {
  switch (action.type) {
    case 'FETCH_MATCH_LIST':
      console.log('fetch match list dispatched');
      return {
        ...state,
        ...STATE,
        isLoading: true,
      }

    case 'FETCH_MATCH_LIST_SUCCESS':
      return {
        ...state,
        list: action.payload,
        isLoading: action.isLoading,
      };

    case 'FETCH_MATCH_LIST_FAILURE':
      console.log('put list all failure');
      return {
        ...state,
        error : action.message,
        status: 'failed',
        isLoading: action.isLoading,
      }

    case 'FETCH_MATCH_LIST_ERROR':
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

const STATE = {
    success: false,
    error: '',
    isLoading: false,
  };

export default  (state = STATE, action) => {
    switch (action.type) {
        case 'POST_ADD_PLAYER':
        console.log('post add player dispatched');
        return {
            ...STATE,
            isLoading: true,
        }

        case 'POST_ADD_PLAYER_SUCCESS':
        return {
            ...state,
            success: true,
            isLoading: action.isLoading,
        };

        case 'POST_ADD_PLAYER_FAILURE':
        console.log('put list all failure');
        return {
            ...state,
            success: false,
            error : action.message,
            status: 'failed',
            isLoading: action.isLoading,
        }

        case 'POST_ADD_PLAYER_ERROR':
        console.log('put list all error', action);
        return {
            ...state,
            ...action.error,
            success: false,
            status: 'error',
            isLoading: action.isLoading,
        }

        case 'RESET_UPDATE_SUCCESS' :
        return {
            ...state,
            success: false,
        }

        default :
            return state;
  }
};
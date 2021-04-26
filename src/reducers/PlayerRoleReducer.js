const STATE = {
    success: false,
    error: '',
    isLoading: false,
  };

export default  (state = STATE, action) => {
    switch (action.type) {
        case 'POST_PLAYER_ROLE':
        console.log('post player role dispatched');
        return {
            ...STATE,
            isLoading: true,
        }

        case 'POST_PLAYER_ROLE_SUCCESS':
        return {
            ...state,
            success: true,
            isLoading: action.isLoading,
        };

        case 'POST_PLAYER_ROLE_FAILURE':
        console.log('put list all failure');
        return {
            ...state,
            success: false,
            error : action.message,
            status: 'failed',
            isLoading: action.isLoading,
        }

        case 'POST_PLAYER_ROLE_ERROR':
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
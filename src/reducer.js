//abhishek360

import { combineReducers } from 'redux';
import UserDetailsReducer from './reducers/UserDetailsReducer';
import MatchListReducer from './reducers/MatchListReducer';
import MatchDetailsReducer from './reducers/MatchDetailsReducer';
import AppStateReducer from './reducers/AppStateReducer';
import TeamDetailsReducer from './reducers/TeamDetailsReducer';
import AddPlayerReducer from './reducers/AddPlayerReducer';
import RemovePlayerReducer from './reducers/RemovePlayerReducer';
import MatchScoreReducer from './reducers/MatchScoreReducer';


const appReducer = combineReducers({
  userDetails: UserDetailsReducer,
  matchList: MatchListReducer,
  matchDetails: MatchDetailsReducer,
  teamDetails: TeamDetailsReducer,
  appState: AppStateReducer,
  addPlayer: AddPlayerReducer,
  removePlayer: RemovePlayerReducer,
  matchScore: MatchScoreReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    console.log('user logout');
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer;

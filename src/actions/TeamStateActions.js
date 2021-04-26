//abhishek360

import {
  POST_ADD_PLAYER,
  POST_REMOVE_PLAYER,
  RESET_UPDATE_SUCCESS,
  POST_PLAYER_ROLE,
} from '../constants/action-constants';


export const postAddPlayer = (matchId, playerId)=>({
  type : POST_ADD_PLAYER,
  route : `team/addtoteam`,
  data : {
    'match_id' : matchId,
    'player_id' : playerId,
  },
});

export const postRemovePlayer = (matchId, playerId)=>({
  type : POST_REMOVE_PLAYER,
  route : `team/removefromteam`,
  data : {
    'match_id' : matchId,
    'player_id' : playerId,
  },
});

export const postPlayerRole = (matchId, playerId, role)=>({
  type : POST_PLAYER_ROLE,
  route : `user/assign`,
  data : {
    'match_id' : matchId,
    'player_id' : playerId,
    'role' : role,
  },
});

export const resetUpdateSuccess = ()=>({
  type : RESET_UPDATE_SUCCESS,
});



//abhishek360

import {
  FETCH_MATCH_LIST,
  FETCH_MATCH_DETAILS,
  FETCH_TEAM_DETAILS,
  RESSET_SUCCESS,
  FETCH_MATCH_SCOREBOARD,
  FETCH_LIVE_SCORE,
} from '../constants/action-constants';

export const fetchMatchList = ()=>({
  type : FETCH_MATCH_LIST,
  route : `team/matches`,
});

export const fetchMatchDetails = (matchId)=>({
  type : FETCH_MATCH_DETAILS,
  route : `team/playerlist?match_id=`,
  query : matchId,
});

export const fetchTeamDetails = (matchId)=>({
  type : FETCH_TEAM_DETAILS,
  route : `user/myteam?match_id=`,
  query: matchId,
});

export const fetchMatchScore = (matchId)=>({
  type : FETCH_MATCH_SCOREBOARD,
  route : `user/scoreboard?match_id=`,
  query: matchId,
});

export const fetchLiveScore = ()=>({
  type : FETCH_LIVE_SCORE,
  route : `team/live_score`,
})

export const ressetStatusChange = ()=>({
  type : RESSET_SUCCESS,
});

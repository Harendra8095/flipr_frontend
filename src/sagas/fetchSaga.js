import { all, takeEvery } from 'redux-saga/effects';

import {
  FETCH_MATCH_LIST,
  FETCH_MATCH_DETAILS,
  FETCH_TEAM_DETAILS,
  FETCH_MATCH_SCOREBOARD,
  FETCH_LIVE_SCORE,
} from '../constants/action-constants';

import { fetchWorkerSaga }  from './getSagasHelpers';

export default function* fetchSagas() {
  try {
    yield all([
      takeEvery(FETCH_MATCH_LIST, fetchWorkerSaga),
      takeEvery(FETCH_MATCH_DETAILS, fetchWorkerSaga),
      takeEvery(FETCH_TEAM_DETAILS, fetchWorkerSaga),
      takeEvery(FETCH_MATCH_SCOREBOARD, fetchWorkerSaga),
      takeEvery(FETCH_LIVE_SCORE, fetchWorkerSaga),
    ])
  }
  catch (error) {
    console.log('errors in get sagas ==> ', error);
  }
}

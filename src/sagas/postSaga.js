import { all, takeEvery } from 'redux-saga/effects';

import{
  POST_ADD_PLAYER,
  POST_REMOVE_PLAYER,
  POST_PLAYER_ROLE,
} from '../constants/action-constants';
import { postWorkerSaga } from './getSagasHelpers';

export default function* postSagas() {
  try {
    yield all([
      takeEvery(POST_ADD_PLAYER, postWorkerSaga),
      takeEvery(POST_REMOVE_PLAYER, postWorkerSaga),
      takeEvery(POST_PLAYER_ROLE, postWorkerSaga),
    ])
  }
  catch (error) {
    console.log('errors in post sagas ==> ', error);
  }
}

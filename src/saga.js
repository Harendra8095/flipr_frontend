//abhishek360
import { fork, all } from 'redux-saga/effects';

import fetchSaga from './sagas/fetchSaga';
import postSaga from './sagas/postSaga';
import putSaga from './sagas/putSaga';

export default function* watcherSaga() {
  try{
    yield all([
      fork(fetchSaga),
      fork(postSaga),
      fork(putSaga),
    ]);
  }
  catch(error) {
    console.log('error in initializing root-sagas ==> ', error);
  }

}

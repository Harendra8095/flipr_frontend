import { all, takeEvery } from 'redux-saga/effects';
import {

} from '../constants/action-constants';

import { putWorkerSaga } from './getSagasHelpers';

export default function* putSagas() {
  try {
    yield all([
      takeEvery('PUT_DETAILS_UPDATE', putWorkerSaga),
    ])
  }
  catch (error) {
    console.log('errors in put sagas ==> ', error);
  }
}

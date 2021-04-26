//abhishek360

import {  call, put, } from 'redux-saga/effects';
import RequestService from '../services/RequestService';


const fetchRequest = ({ route, query }) => {
  const fetchData = new RequestService(route);
  return fetchData.get(query);
};

const putRequest = ({ route, data, headers, query }) => {
  const putData = new RequestService(route);
  return putData.put(data, headers, query);
};

const postRequest = ({ route, data, headers, query }) => {
  const postData = new RequestService(route);
  return postData.post(data, headers, query);
};

function* fetchWorkerSaga({ route, query, type }) {
  try {
    const result = yield call(fetchRequest, { route, query });
      yield put({
        type: `${type}_SUCCESS`,
        payload: result.payload,
        query,
        isLoading: false,
      });

  } catch (error) {
    yield put({
      type: `${type}_ERROR`,
      error,
      isLoading: false,
    });
  }
}

function* postWorkerSaga({ route, data, stringify, headers, query, type }) {
  try {
    const result = yield call(postRequest, { route, data, headers, query });
    console.log('post result success',result.status);
      yield put({
        type: `${type}_SUCCESS`,
        payload: result,
        query,
        isLoading: false,
      });
    
  } catch (error) {
    console.log('post result error',error);
    yield put({
      type: `${type}_ERROR`,
      error,
      isLoading: false,
    });
  }
}

function* putWorkerSaga({ route, data, stringify, headers, query, type }) {
  try {
    const result = yield call(putRequest, { route, data, stringify, headers, query });
      yield put({
        type: `${type}_SUCCESS`,
        payload: result,
        isLoading: false,
      });

  } catch (error) {
    yield put({
      type: `${type}_ERROR`,
      error,
      isLoading: false,
    });
  }
}

export { fetchWorkerSaga, putWorkerSaga, postWorkerSaga };

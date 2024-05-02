import { put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_JOBS_REQUEST, fetchJobsSuccess, fetchJobsFailure } from '../redux/actions/jobActions';

function* fetchJobs() {
  try {
    const response = yield axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
      limit: 10,
      offset: 0
    });
    yield put(fetchJobsSuccess(response.data));
  } catch (error) {
    yield put(fetchJobsFailure(error.message));
  }
}

function* watchFetchJobs() {
  yield takeLatest(FETCH_JOBS_REQUEST, fetchJobs);
}

export default function* jobSaga() {
  yield all([
    watchFetchJobs()
  ]);
}

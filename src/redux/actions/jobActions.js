import axios from 'axios';

export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST
});

export const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error
});

export const fetchJobs = () => {
  return async (dispatch) => {
    dispatch(fetchJobsRequest());
    try {
      const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        limit: 10,
        offset: 0
      });
      dispatch(fetchJobsSuccess(response.data));
    } catch (error) {
      dispatch(fetchJobsFailure(error.message));
    }
  };
};

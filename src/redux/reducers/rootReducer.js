import { combineReducers } from 'redux';
import jobReducer from './reducers/jobReducer';
import filterReducer from './reducers/filterReducer';

const rootReducer = combineReducers({
  jobs: jobReducer,
  filters: filterReducer
});

export default rootReducer;

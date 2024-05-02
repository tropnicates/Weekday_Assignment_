import { combineReducers } from 'redux';
import jobReducer from './jobReducer';
import filterReducer from './filterReducers';

const rootReducer = combineReducers({
  jobs: jobReducer,
  filters: filterReducer
});

export default rootReducer;

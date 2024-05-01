import { createStore, combineReducers, applyMiddleware } from 'redux';
import *as ReduxThunk from 'redux-thunk';
import jobReducer from './reducers/jobReducer';
import filterReducer from './reducers/filterReducers';

const rootReducer = combineReducers({
  jobs: jobReducer,
  filters: filterReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk) 
);

export default store;

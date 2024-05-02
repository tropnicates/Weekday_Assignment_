import { combineReducers, applyMiddleware } from 'redux';
import { thunk as ReduxThunk} from 'redux-thunk';
import jobReducer from './reducers/jobReducer';
import filterReducer from './reducers/filterReducers';
import { legacy_createStore as createStore } from 'redux';

const rootReducer = combineReducers({
  jobs: jobReducer,
  filters: filterReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk) 
);

export default store;


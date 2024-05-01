import { APPLY_FILTER } from '../actions/filterActions';

const initialState = {
  filters: {}
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPLY_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload
        }
      };
    default:
      return state;
  }
};

export default filterReducer;
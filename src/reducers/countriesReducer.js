import { ACTION_TYPES } from '../actions/action-types';

export const iState = {
  loading: false,
  countries: [],
  error: null,
};

export const countriesReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_START:
      return { ...state, loading: true, error: false };
    case ACTION_TYPES.FETCH_SUCCESS:
      return { ...state, countries: action.payload, loading: false };
    case ACTION_TYPES.FETCH_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

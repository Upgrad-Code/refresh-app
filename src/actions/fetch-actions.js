import { ACTION_TYPES } from './action-types';

export const fetchStart = () => {
  return {
    type: ACTION_TYPES.FETCH_START,
  };
};

export const fetchSuccess = (data) => {
  return {
    type: ACTION_TYPES.FETCH_SUCCESS,
    payload: data,
  };
};

export const fetchError = (data) => {
  return {
    type: ACTION_TYPES.FETCH_ERROR,
    payload: data,
  };
};

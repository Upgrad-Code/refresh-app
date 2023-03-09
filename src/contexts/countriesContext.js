import React, { createContext, useReducer, useEffect } from 'react';
import { AJAX } from '../helpers/helperFns';
import { REST_COUNTRIES_API } from '../helpers/config';
import { iState, countriesReducer } from '../reducers/countriesReducer';
import { fetchStart, fetchSuccess, fetchError } from '../actions/fetch-actions';

export const countriesContext = createContext(iState);

export const CountriesContextProvider = (props) => {
  const [state, dispatch] = useReducer(countriesReducer, iState);
  useEffect(() => {
    (async () => {
      try {
        dispatch(fetchStart());
        const data = await AJAX(`${REST_COUNTRIES_API}/all`);
        dispatch(fetchSuccess([...data]));
      } catch (err) {
        dispatch(fetchError(err));
      }
    })();
  }, []);
  return (
    <countriesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </countriesContext.Provider>
  );
};

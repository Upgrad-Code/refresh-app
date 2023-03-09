import React, { createContext, useReducer } from 'react';
import { iState, countriesReducer } from '../reducers/countriesReducer';

export const countriesContext = createContext(iState);

export const CountriesContextProvider = (props) => {
  const [state, dispatch] = useReducer(countriesReducer, iState);
  return (
    <countriesContext.Provider value={{ state, dispatch }}>
      {props.children}
    </countriesContext.Provider>
  );
};

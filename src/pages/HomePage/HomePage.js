import React, { useEffect, useReducer, useContext } from 'react';
import { AJAX } from '../../helpers/helperFns';
import { REST_COUNTRIES_API } from '../../helpers/config';
import { countriesContext } from '../../contexts/countriesContext';
import {
  fetchStart,
  fetchSuccess,
  fetchError,
} from '../../actions/fetch-actions';

const HomePage = () => {
  const { state, dispatch } = useContext(countriesContext);
  console.log(state);

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
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

export default HomePage;

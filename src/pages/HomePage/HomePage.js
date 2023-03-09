import React, { useEffect, useReducer } from 'react';
import { AJAX } from '../../helpers/helperFns';
import { REST_COUNTRIES_API } from '../../helpers/config';
import { countriesReducer, iState } from '../../reducers/countriesReducer';
import {
  fetchStart,
  fetchSuccess,
  fetchError,
} from '../../actions/fetch-actions';

const HomePage = () => {
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
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

export default HomePage;

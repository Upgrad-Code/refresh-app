import React, { useEffect } from 'react';
import { AJAX } from '../../helpers/helperFns';
import { REST_COUNTRIES_API } from '../../helpers/config';

const HomePage = () => {
  useEffect(() => {
    (async () => {
      try {
        const data = await AJAX(`${REST_COUNTRIES_API}/all`);
        console.log(data);
      } catch (err) {}
    })();
  }, []);

  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

export default HomePage;

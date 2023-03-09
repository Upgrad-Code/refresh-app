import React, { useContext } from 'react';
import { countriesContext } from '../../contexts/countriesContext';

const HomePage = () => {
  const { state, dispatch } = useContext(countriesContext);
  console.log(state);

  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

export default HomePage;

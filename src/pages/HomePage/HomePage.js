import React, { useContext } from 'react';
import { countriesContext } from '../../contexts/countriesContext';
import { removeDuplicates, mappedArray } from '../../helpers/helperFns';

const HomePage = () => {
  const { state, dispatch } = useContext(countriesContext);
  const { loading, countries, error } = state;
  console.log(state);

  const continents =
    countries && removeDuplicates(mappedArray(countries, 'continents', 0));
  console.log(continents);

  const areas = countries && mappedArray(countries, 'area');
  console.log(areas);

  return (
    <div>
      <h1>HOME PAGE</h1>
    </div>
  );
};

export default HomePage;

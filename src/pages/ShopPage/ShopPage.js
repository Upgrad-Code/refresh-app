import React, { useContext } from 'react';
import { countriesContext } from '../../contexts/countriesContext';

const ShopPage = () => {
  const { state, dispatch } = useContext(countriesContext);
  console.log(state, 'Shop Page...');
  return (
    <div>
      <h1>SHOPPAGE</h1>
    </div>
  );
};
export default ShopPage;

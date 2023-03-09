import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CountriesContextProvider } from './contexts/countriesContext';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <CountriesContextProvider>
      <App />
    </CountriesContextProvider>
  </StrictMode>
);

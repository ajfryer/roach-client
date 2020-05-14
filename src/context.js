import React from 'react';

export default React.createContext({
  portfolios: [],
  getPortfolios: () => null,
  loading: false,
});

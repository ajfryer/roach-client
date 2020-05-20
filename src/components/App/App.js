// node_modules imports
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// project imports
import { ROACH_DEFAULT, BENCHMARK_DEFAULT } from 'config.js';
import Theme from 'components/Common/Theme';
import MarketingPage from 'components/MarketingPage/MarketingPage';
import PortfolioPage from 'components/PortfolioPage/PortfolioPage';
import ErrorBoundary from 'components/Common/ErrorBoundary';
import PortfoliosContext from 'context.js';
import { fetchPortfolios } from 'api.js';

/*
- holds 2 portfolios in state: roach & benchmark
- updates states with fetches to backend
- passes state to global context
- routes UI to appropriate page component 
*/
const App = () => {
  // instead of useState, store portfolios to local storage
  const [portfolios, setPortfolios] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPortfolios = async (roachStrategy, benchmarkWeights) => {
    try {
      setLoading(true);

      const fetch = await fetchPortfolios(roachStrategy, benchmarkWeights);

      const data = {
        roach: {
          key: JSON.parse(fetch.roach.key),
          value: JSON.parse(fetch.roach.value),
        },
        benchmark: {
          key: JSON.parse(fetch.benchmark.key),
          value: JSON.parse(fetch.benchmark.value),
        },
      };

      setPortfolios(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // on first render, set default portfolios from config
    const setDefaultPortfolios = async () => {
      await getPortfolios(ROACH_DEFAULT, BENCHMARK_DEFAULT);
    };

    if (!portfolios) setDefaultPortfolios();
    //eslint-disable-next-line
  }, []);

  return (
    <PortfoliosContext.Provider
      value={{
        portfolios,
        getPortfolios,
        loading,
      }}
    >
      <Theme>
        <Switch>
          <Route path="/portfolio">
            <ErrorBoundary>
              <PortfolioPage />
            </ErrorBoundary>
          </Route>
          <Route>
            <ErrorBoundary>
              <MarketingPage />
            </ErrorBoundary>
          </Route>
        </Switch>
      </Theme>
    </PortfoliosContext.Provider>
  );
};

export default App;

import React from 'react';
import BenchmarkFieldset from 'components/PortfolioPage/BenchmarkFieldset';
import { ROACH_OPTIONS, BENCHMARK_OPTIONS } from 'config.js';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'context.js';

const handleChange = jest.fn();

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <BenchmarkFieldset
        change={handleChange}
        options={BENCHMARK_OPTIONS}
        value={[0.6, 0.4, 0, 0]}
      />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});

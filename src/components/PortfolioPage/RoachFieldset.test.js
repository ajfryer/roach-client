import React from 'react';
import RoachFieldset from 'components/PortfolioPage/RoachFieldset';
import { ROACH_OPTIONS, BENCHMARK_OPTIONS } from 'config.js';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'context.js';

const handleChange = jest.fn();

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <RoachFieldset
        change={handleChange}
        options={ROACH_OPTIONS}
        value={'equalWeight'}
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

import React from 'react';
import Equity from 'components/PortfolioPage/Equity';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'context.js';

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Providers>
      {' '}
      <PortfoliosContext.Provider value={mockContext}>
        <Theme>
          <Equity />
        </Theme>
      </PortfoliosContext.Provider>
    </Providers>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

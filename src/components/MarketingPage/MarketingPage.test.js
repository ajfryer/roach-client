import React from 'react';
import MarketingPage from 'components/MarketingPage/MarketingPage';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'context.js';

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <MarketingPage />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});

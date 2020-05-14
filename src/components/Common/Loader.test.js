import React from 'react';
import Loader from 'components/Common/Loader';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'context.js';

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <Loader />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});

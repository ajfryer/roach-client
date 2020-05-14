import React from 'react';
import Form from 'components/PortfolioPage/Form';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'context.js';

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <Form />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import PieChart from 'components/PortfolioPage/PieChart';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'context.js';

const handleChange = jest.fn();

const weightsChartDatas = [
  {
    x: 'stocks',
    y: 0.6,
    z: 'benchmark',
    fill: 'green',
  },
  {
    x: 'bonds',
    y: 0.4,
    z: 'benchmark',
    fill: 'red',
  },
];

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <PieChart chartDatas={weightsChartDatas} />
    </Theme>
  </PortfoliosContext.Provider>
);

// smoke test
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<Providers>{component}</Providers>, div);
  ReactDOM.unmountComponentAtNode(div);
});

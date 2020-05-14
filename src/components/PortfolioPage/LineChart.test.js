import React from 'react';
import LineChart from 'components/PortfolioPage/LineChart';

import Theme from 'components/Common/Theme';
// react context
import PortfoliosContext from 'context.js';

const handleChange = jest.fn();

const equityChartDatas = [
  {
    data: [
      { x: new Date('2000-11-30'), y: 1 },
      { x: new Date('2000-12-31'), y: 1.5 },
    ],
    name: `roach`,
    style: {
      data: {
        stroke: 'green',
        strokeDasharray: undefined,
        strokeWidth: 3,
      },
      yAxix: {},
    },
  },
];

const component = (
  <PortfoliosContext.Provider value={mockContext}>
    <Theme>
      <LineChart
        chartDatas={equityChartDatas}
        tickFormatX={(x) => {
          if (x.getFullYear() === 2005) {
            return x.getFullYear();
          } else {
            return x.getFullYear().toString().slice(2);
          }
        }}
        tickFormatY={(y) => '$' + y}
        scaleX={'time'}
        scaleY={'linear'}
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

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { Theme } from 'components/Common/Theme';

global.React = React;
global.ReactDOM = ReactDOM;
global.act = act;
global.renderer = renderer;
global.Enzyme = Enzyme;
Enzyme.configure({ adapter: new Adapter() });

global.Providers = (props) => (
  <MemoryRouter initialEntries={['/']} initialIndex={0}>
    {props.children}
  </MemoryRouter>
);

const getPortfolios = jest.fn();

global.mockContext = {
  portfolios: {
    benchmark: {
      key: {
        weights: [0.6, 0.4, 0, 0],
      },
      value: {
        options: {
          dates: ['2001-07-03T21:00:00.000Z', '2001-07-05T21:00:00.000Z'],
          isReturns: true,
          lookbackPeriod: 126,
          rebalancePeriod: 126,
          weights: [0.6, 0.4, 0, 0],
        },
        results: {
          CAGR: 0.05,
          VAR: 0.003,
          equityCurve: [1, 0.9965, 0.8],
          longestDD: [[0.3470772305453951, 1591, 1930]],
          maxDD: 0.34,
          returns: [-0.003, -0.197],
          symbols: ['URTH', 'GOVT', 'GLD', 'NEIXCTAT'],
          weightsByAsset: [
            [0.6, 0.59],
            [0.4, 0.41],
          ],
        },
      },
    },
    roach: {
      key: {
        strategy: 'minimumVariance',
      },
      value: {
        options: {
          dates: ['2001-07-03T21:00:00.000Z', '2001-07-05T21:00:00.000Z'],
          isReturns: true,
          lookbackPeriod: 126,
          rebalancePeriod: 126,
          strategy: 'minimumVariance',
        },
        results: {
          CAGR: 0.05,
          VAR: 0.003,
          equityCurve: [1, 0.9965, 0.8],
          longestDD: [[0.3470772305453951, 1591, 1930]],
          maxDD: 0.34,
          returns: [-0.003, -0.197],
          symbols: ['URTH', 'GOVT', 'GLD', 'NEIXCTAT'],
          weightsByAsset: [
            [0.6, 0.59],
            [0.4, 0.41],
          ],
        },
      },
    },
  },
  getPortfolios,
  loading: false,
};

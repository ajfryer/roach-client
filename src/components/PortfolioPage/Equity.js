// node_modules import
import React, { useContext } from 'react';
import styled from 'styled-components';
import { sampleCorrelation } from 'simple-statistics';
import { ThemeContext } from 'styled-components';
import Color from 'color';

// project imports
import LineChart from 'components/PortfolioPage/LineChart';
import Loader from 'components/Common/Loader';
import PortfoliosContext from 'context';

/*
  Wrapper for equity curve chart card.
  Gets equity data from portfolios context.
  Creates chart data from equity data.
  Renders line chart component with props
*/
const Equity = () => {
  // get theme styles
  const theme = useContext(ThemeContext);

  // get portfolios context data
  const { portfolios } = useContext(PortfoliosContext);
  const { roach, benchmark } = portfolios;

  // line chart data
  const dates = roach.value.options.dates;

  // extract equity curve data from context data
  const equity = {
    benchmark: benchmark.value.results.equityCurve,
    roach: roach.value.results.equityCurve,
  };

  // combine equity and dates data to create line chart data object
  const equityChartDatas = Object.keys(equity).map((key) => ({
    data: equity[key].map((d, i) => ({ x: new Date(dates[i]), y: d })),
    name: `${key}`,
    style: {
      data: {
        stroke:
          key === 'roach' ? theme.color.primary.light : theme.color.grey[1],
        strokeDasharray: key === 'roach' ? undefined : undefined,
        strokeWidth: key === 'roach' ? 3 : 3,
      },
      yAxix: {},
    },
  }));

  // correlation ribbon data
  const returns = {
    benchmark: benchmark.value.results.returns,
    roach: roach.value.results.returns,
  };

  // correlation ribbon calculation
  const correlation =
    Math.round(100 * sampleCorrelation(returns.roach, returns.benchmark)) / 100;

  return (
    <Section>
      <Card>
        <Loader>
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
          <CorrelationRibbon>
            <RibbonBack />
            Correlation: <span>{correlation}</span>
          </CorrelationRibbon>
        </Loader>
      </Card>
    </Section>
  );
};

// private styled components
const Section = styled.section`
  position: relative;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1rem 1rem;
  z-index: 0;
`;

const CorrelationRibbon = styled.div`
  position: absolute;
  left: -10px;
  top: 30%;
  height: 50px;
  width: 175px;

  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.color.primary.light};
  font-family: ${({ theme }) => theme.fontFamily.dinot.medium};
  color: ${({ theme }) => theme.color.grey[8]};
  font-weight: bold;
  -webkit-box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  span {
    font-size: 20px;
    margin-left: 0.25rem;
    font-family: ${({ theme }) => theme.fontFamily.dinot.bold};
  }
`;

const RibbonBack = styled.div`
  display: block;
  height: 20px;
  width: 8px;
  position: absolute;
  top: 50px;
  left: 0px;
  background: transparent;
  border-top: 45px solid
    ${({ theme }) => Color(theme.color.primary.regular).darken(0.4).hex()};
  border-left: 45px outset transparent;
  z-index: -1;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.color.grey[8]};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  height: 500px;
  padding: 1rem;
  position: relative;
`;

Equity.propTypes = {};

export default Equity;

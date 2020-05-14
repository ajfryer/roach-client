// node_modules imports
import React, { useContext } from 'react';
import styled from 'styled-components';
import Color from 'color';
import { ThemeContext } from 'styled-components';

//  project imports
import PortfoliosContext from 'context';
import PieChart from 'components/PortfolioPage/PieChart';
import Loader from 'components/Common/Loader';
import { BENCHMARK_OPTIONS } from 'config.js';

/*
  Wrapper component for pie charts.
  Gets data from context and passes it to chart components.
*/
const Weights = () => {
  // get theme styles from context
  const theme = useContext(ThemeContext);

  // get portfolios from context
  const { portfolios } = useContext(PortfoliosContext);
  const { roach, benchmark } = portfolios;

  // get dates
  const dates = roach.value.options.dates;
  const currentDate = new Date(dates[dates.length - 1]);

  // get list of assets
  const assets = BENCHMARK_OPTIONS;

  // get current weights of assets
  const currentWeights = {
    roach: roach.value.results.weightsByAsset.map((a, i) => a[a.length - 1]),
    benchmark: benchmark.value.results.weightsByAsset.map(
      (a, i) => a[a.length - 1]
    ),
  };

  // pie chart color scheme
  const colors = [
    Color(theme.color.primary.regular).hex(),
    Color(theme.color.primary.regular).darken(0.5).hex(),
    Color(theme.color.primary.regular).lighten(0.5).hex(),
    Color(theme.color.primary.regular).lighten(1).hex(),
  ];

  // combine currentWeights, assets, and colors into pie chart data
  const weightsChartsDatas = Object.keys(currentWeights).map((key, idx) =>
    currentWeights[key].map((d, i) => ({
      x: assets[i],
      y: d,
      z: key,
      fill: colors[i],
    }))
  );

  return (
    <Section>
      <Card>
        <Loader>
          <Header>
            {' '}
            <h3>Current Portfolio Allocation</h3>
            <h5>
              <i>{currentDate.toDateString()}</i>
            </h5>
          </Header>
          <Content>
            <PieChart chartDatas={weightsChartsDatas[0]} />
            <PieChart chartDatas={weightsChartsDatas[1]} />
          </Content>
        </Loader>
      </Card>
    </Section>
  );
};

// private styled components
const Section = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 1rem 1rem;
`;

const Card = styled.div`
  background-color: ${({ theme }) => theme.color.grey[8]};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow[1]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  text-align: center;

  h3 {
    margin-bottom: 0.5rem;
  }

  h5 {
    color: ${({ theme }) => theme.color.grey[1]};
  }

  margin-bottom: 1.5rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
  }
`;

Weights.propTypes = {};

export default Weights;

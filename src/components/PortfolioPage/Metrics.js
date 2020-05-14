// node_modules imports
import React, { useContext } from 'react';
import styled from 'styled-components';

// project imports
import Loader from 'components/Common/Loader';
import PortfoliosContext from 'context';

/*
  Gets metrics data from context.
  Displays metrics cards.
*/
const Metrics = (props) => {
  // get portfolios from context
  const { portfolios } = useContext(PortfoliosContext);
  const { roach, benchmark } = portfolios;

  // extract metrics data from portfolios
  const metrics = {
    CAGR: {
      roach: Math.round(100 * (roach.value.results.CAGR * 100)) / 100,
      benchmark: Math.round(100 * (benchmark.value.results.CAGR * 100)) / 100,
    },
    maxDD: {
      roach: Math.round(100 * (roach.value.results.maxDD * 100)) / 100,
      benchmark: Math.round(100 * (benchmark.value.results.maxDD * 100)) / 100,
    },
    longestDD: {
      roach: roach.value.results.longestDD.reduce((tot, val) => {
        const diff = val[2] - val[1];
        tot = diff > tot ? diff : tot;
        return tot;
      }, 0),
      benchmark: benchmark.value.results.longestDD.reduce((tot, val) => {
        const diff = val[2] - val[1];
        tot = diff > tot ? diff : tot;
        return tot;
      }, 0),
    },
  };

  return (
    <Section>
      <Card>
        <Loader>
          <CardInner>
            <Header>
              <h3>Annualized Return</h3>
              <h5>
                <i>compounded annual growth rate</i>
              </h5>
            </Header>
            <Content>
              <div>
                <h4>roach:</h4>
                <Percentage v={'p'}>
                  +{metrics.CAGR.roach}
                  <span>%</span>
                </Percentage>
              </div>
              <div>
                <h4>benchmark:</h4>
                <Percentage v={'p'}>
                  +{metrics.CAGR.benchmark}
                  <span>%</span>
                </Percentage>
              </div>
            </Content>
          </CardInner>
        </Loader>
      </Card>
      <Card>
        <Loader>
          <CardInner>
            <Header>
              <h3>Maximum Drawdown</h3>
              <h5>
                <i>largest peak to trough portfolio loss </i>
              </h5>
            </Header>
            <Content>
              <div>
                <h4>roach:</h4>
                <Percentage v={'n'}>
                  -{metrics.maxDD.roach}
                  <span>%</span>
                </Percentage>
              </div>
              <div>
                <h4>benchmark:</h4>
                <Percentage v={'n'}>
                  -{metrics.maxDD.benchmark}
                  <span>%</span>
                </Percentage>
              </div>
            </Content>
          </CardInner>
        </Loader>
      </Card>
      <Card>
        <Loader>
          <CardInner>
            <Header>
              <h3>Longest Drawdown</h3>
              <h5>
                <i>longest peak to peak portfolio recovery</i>
              </h5>
            </Header>
            <Content>
              <div>
                <h4>roach:</h4>
                <p>
                  {metrics.longestDD.roach}
                  <span>days</span>
                </p>
              </div>
              <div>
                <h4>benchmark:</h4>
                <p>
                  {metrics.longestDD.benchmark}
                  <span>days</span>
                </p>
              </div>
            </Content>
          </CardInner>
        </Loader>
      </Card>
    </Section>
  );
};

// private styled components
const Section = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  background-color: transparent;
  padding: 1rem 1rem;

  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'CAGR'
    'MAXDD'
    'LongestDD';

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: 'CAGR MAXDD LONGESTDD';
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

const Card = styled.div`
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.grey[8]};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  box-shadow: ${({ theme }) => theme.boxShadow[3]};
  height: 200px;
`;

const Header = styled.div`
  h3 {
    margin-bottom: 0.5rem;
    text-align: center;
    margin-top: auto;
  }

  h5 {
    margin-bottom: 0.5rem;
    text-align: center;
    color: ${({ theme }) => theme.color.grey[1]};
    font-family: ${({ theme }) => theme.fontFamily.dinot.light};
  }
  margin-bottom: 2rem;
`;

const CardInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  h4 {
    margin-bottom: 0.5rem;
    font-family: ${({ theme }) => theme.fontFamily.dinot.light};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-size: ${({ theme }) => theme.fontSize[8]};
  }

  text-align: center;
  p {
    font-size: ${({ theme }) => theme.fontSize[3]};
  }
  span {
    font-size: 21px;
    margin-left: 2px;
  }
`;

const Percentage = styled.p`
  color: ${({ v, theme }) =>
    v === 'p' ? theme.color.primary.light : theme.color.accent.red};
`;

Metrics.propTypes = {};

export default Metrics;

import React from 'react';
import styled from 'styled-components';

import {
  FABSection,
  FABHeader,
  FABContent,
  FABCard,
} from 'components/MarketingPage/FAB.styled';

import UpsideCapture from 'resources/icons/upside-capture.svg';
import DownsideCapture from 'resources/icons/downside-capture.svg';
import LowCorrelation from 'resources/icons/low-correlation.svg';

const Advantages = (props) => {
  return (
    <Section type="fixed-width">
      <Header>
        <p>Advantages</p>
        <h2>Why are Roach portfolios useful?</h2>
      </Header>
      <Content>
        <Card>
          {' '}
          <img
            src={DownsideCapture}
            width={50}
            height={50}
            alt="risk management"
          />
          <h4>Risk Management</h4>
          <p>
            Even with bonds, portfolios can take years to recover from losses.
            Roach portfolios aim for shorter drawdowns.
          </p>
        </Card>
        <Card>
          {' '}
          <img
            src={UpsideCapture}
            width={50}
            height={50}
            alt="alternative returns"
          />
          <h4>Alternative Returns</h4>
          <p>
            With historically low rates and high debt, Roach portfolios aim to
            not rely on bonds for returns.
          </p>
        </Card>
        <Card>
          {' '}
          <img
            src={LowCorrelation}
            width={50}
            height={50}
            alt="diversification"
          />
          <h4>Diversification</h4>
          <p>
            {' '}
            Roach portfolios have low correlation to pure stock and bond
            portfolios, making them a good choice for diversification!
          </p>
        </Card>
      </Content>
    </Section>
  );
};

// private styled components
const Section = styled(FABSection)`
  display: flex;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row-reverse;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

const Header = styled(FABHeader)`
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    text-align: left;
    margin-left: 3rem;

    p {
      text-align: left;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

const Content = styled(FABContent)``;

const Card = styled(FABCard)`
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 0.5rem;
  }
`;

Advantages.propTypes = {};
Advantages.defaultProps = {};

export default Advantages;

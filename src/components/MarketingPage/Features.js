import React from 'react';
import styled from 'styled-components';

// shared styled components
import {
  FABSection,
  FABHeader,
  FABContent,
  FABCard,
} from 'components/MarketingPage/FAB.styled';

// icons
import StocksBonds from 'resources/icons/stocks-bonds.svg';
import GoldFutures from 'resources/icons/gold-futures.svg';
import NoDINOS from 'resources/icons/no-dinos.svg';

// Features Component
const Features = () => {
  return (
    <Section type="fixed-width">
      <Header>
        <p>Features</p>
        <h2>What are Roach portfolios?</h2>
      </Header>
      <Content>
        <Card>
          {' '}
          <img
            src={StocksBonds}
            width={50}
            height={50}
            alt="stocks and bonds"
          />
          <h4>Stocks and Bonds</h4>
          <p>
            Like other portfolios, Roach features global stocks diverified with
            government bonds as core holdings.
          </p>
        </Card>
        <Card>
          {' '}
          <img
            src={GoldFutures}
            width={50}
            height={50}
            alt="gold and futures"
          />
          <h4>Gold and Futures</h4>
          <p>
            Unlike others, Roach adds gold and managed futures, two asset
            classes with records of diversifying stocks and bonds.
          </p>
        </Card>
        <Card>
          {' '}
          <img
            src={NoDINOS}
            width={50}
            height={50}
            alt="equal weight or min volatility"
          />
          <h4>Equal Weight or Min Volatility</h4>
          <p>
            {' '}
            Roach features two asset allocation strategies, equal weight or
            minimum variance.
          </p>
        </Card>
        <ComingSoon>More assets and strategies coming soon!</ComingSoon>
      </Content>
    </Section>
  );
};

// private styled components
const Section = styled(FABSection)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

const Header = styled(FABHeader)`
  text-align: center;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    text-align: right;
    margin-right: 3rem;

    p {
      text-align: right;
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

const ComingSoon = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.primary.light};
  font-family: ${({ theme }) => theme.fontFamily.dinot.regular};
`;

Features.propTypes = {};
Features.defaultProps = {};

export default Features;

import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/Common/Button.styled';

import {
  FABSection,
  FABHeader,
  FABContent,
  FABCard,
} from 'components/MarketingPage/FAB.styled';

// icons
import YoungInvestors from 'resources/icons/young-investors.svg';
import OlderInvestors from 'resources/icons/older-investors.svg';
import InstitutionalInvestors from 'resources/icons/institutional-investors.svg';

const Benefits = (props) => {
  let history = useHistory();

  return (
    <>
      <Section type="fixed-width">
        <Header>
          <p>Benefits</p>
          <h2>Who are roach portfolios best for?</h2>
        </Header>
        <Content>
          <Card>
            {' '}
            <img
              src={OlderInvestors}
              width={50}
              height={50}
              alt="near retirees"
            />
            <h4>Near Retirees</h4>
            <p>
              The 10 years before retirement are difficult times to invest
              without confidence in your downside protection.
            </p>
          </Card>
          <Card>
            {' '}
            <img
              src={YoungInvestors}
              width={50}
              height={50}
              alt="big purchase savers"
            />
            <h4>Big Purchase Savers</h4>
            <p>
              Younger investors saving for big purchases may not tolerate large
              losses that derail saving plans.
            </p>
          </Card>
          <Card>
            {' '}
            <img
              src={InstitutionalInvestors}
              width={50}
              height={50}
              alt="institutional investors"
            />
            <h4>Liability-driven Institutions</h4>
            <p>
              {' '}
              market volatility and low interest rates force institutions to
              seek alternative returns.
            </p>
          </Card>
        </Content>
      </Section>
      <Section type="fixed-width">
        <CTA onClick={() => history.push('/portfolio')}>Explore Portfolios</CTA>
      </Section>
    </>
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

const Card = styled(FABCard)``;

const CTA = styled(Button)`
  justify-self: center;
  margin: 0rem auto 9rem auto;
  animation: anim-glow 3s ease infinite;
  box-shadow: 0 0 ${({ theme }) => theme.color.primary.light};
  font-size: ${({ theme }) => theme.fontSize[7]};
  letter-spacing: 0.5px;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize[6]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize[5]};
  }
`;

Benefits.propTypes = {};
Benefits.defaultProps = {};

export default Benefits;

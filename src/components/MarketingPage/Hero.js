// node_modules imports
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

// project imports
import Button from 'components/Common/Button.styled';

const Hero = () => {
  let history = useHistory();

  return (
    <Section type="fixed-width">
      <Tagline>
        Roach
        <br />
        <span>harder to kill investment portfolios.</span>
      </Tagline>
      <Description>
        Most people diversify risk with bonds.
        <br /> With today's investing{' '}
        <Realities>
          <>realities</>
          <sup>*</sup>
          <span>
            negative interest rates, rising stock/bond correlation, historic
            debts & deficits
          </span>
        </Realities>
        , it's smart to diversify further.
        <br />
        <b>
          <span>Roach portfolios add gold and managed futures.</span>
          <br />
          <br /> Learn why below, or click to explore.
        </b>
      </Description>
      <CTA onClick={() => history.push('/portfolio')}>Explore Portfolios</CTA>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  max-width: ${({ type, theme }) =>
    type === 'fixed-width' ? theme.maxWidth : '100%'};
  margin: 0 auto;
  min-height: calc(100vh - 107px);
  padding: 0 1rem;
`;

const Tagline = styled.h1`
  margin-top: auto;
  margin-bottom: 0;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey[4]};
  font-size: ${({ theme }) => theme.fontSize[3]};
  line-height: 1.25em;
  letter-spacing: ${({ theme }) => theme.letterSpacing[3]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize[2]};
    line-height: 1.25em;
    letter-spacing: ${({ theme }) => theme.letterSpacing[2]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize[1]};
    line-height: 1.25em;
    letter-spacing: ${({ theme }) => theme.letterSpacing[1]};
  }

  span {
    font-family: ${({ theme }) => theme.fontFamily.dinot.light};
  }
`;

const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize[5]};
  line-height: 1.75em;
  letter-spacing: ${({ theme }) => theme.letterSpacing[5]};
  margin: 1.5rem 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize[4]};
    line-height: 1.75em;
    letter-spacing: ${({ theme }) => theme.letterSpacing[4]};
    margin: 2.25rem 0;
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize[3]};
    line-height: ${({ theme }) => theme.lineHeight[3]};
    letter-spacing: ${({ theme }) => theme.letterSpacing[3]};
    font-size: ${({ theme }) => theme.fontSize[3]};
    line-height: 1.75em;
    letter-spacing: ${({ theme }) => theme.letterSpacing[3]};
    margin: 3rem 0;
  }

  span {
    font-family: ${({ theme }) => theme.fontFamily.dinot.medium};
  }
`;

const CTA = styled(Button)`
  margin-bottom: auto;
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

const Realities = styled.span`
  display: inline;
  text-decoration: none;

  &:hover {
    cursor: help;
    position: relative;
  }

  span {
    display: none;
  }

  &:hover span {
    border: #c0c0c0 1px dotted;
    padding: 5px 20px 5px 5px;
    display: block;
    z-index: 100;
    background-color: ${({ theme }) => theme.color.primary.dark};
    width: 320px;
    left: -160px;
    margin-top: 1.25rem;
    position: absolute;
    top: 10px;
    text-decoration: none;
    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 640px;
      left: -320px;
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      width: 920px;
      left: -460px;
    }
  }
`;

Hero.propTypes = {};
Hero.defaultProps = {};

export default Hero;

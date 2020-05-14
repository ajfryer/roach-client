// node_modules imports
import React from 'react';
import styled from 'styled-components';

/*
  Portfolio Page Hero
*/
const Hero = () => {
  return (
    <Section>
      <Content>
        <Tagline>Roach Simulator</Tagline>
        <Description>
          Simulate an equal weight or minimum variance Roach portfolio and
          compare it to common benchmarks like 60% stocks and 40% bonds!
        </Description>
      </Content>
    </Section>
  );
};

// private styled components
const Section = styled.section`
  max-width: ${({ theme }) => theme.maxWidth};
  grid-area: hero;
  margin: 0 auto;
  padding: 0rem 1rem;
  min-height: 350px;
`;

const Content = styled.div`
  min-height: calc(250px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tagline = styled.h1`
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.color.primary.light};
  font-size: ${({ theme }) => theme.fontSize[4]};
  line-height: ${({ theme }) => theme.lineHeight[4]};
  letter-spacing: ${({ theme }) => theme.letterSpacing[4]};

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize[3]};
    line-height: ${({ theme }) => theme.lineHeight[3]};
    letter-spacing: ${({ theme }) => theme.letterSpacing[3]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize[2]};
    line-height: ${({ theme }) => theme.lineHeight[2]};
    letter-spacing: ${({ theme }) => theme.letterSpacing[2]};
  }

  span {
  }
`;

const Description = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.color.grey[1]};
  font-size: ${({ theme }) => theme.fontSize[6]};
  line-height: ${({ theme }) => theme.lineHeight[6]};
  letter-spacing: ${({ theme }) => theme.letterSpacing[6]};
  margin: 0 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    font-size: ${({ theme }) => theme.fontSize[5]};
    line-height: ${({ theme }) => theme.lineHeight[5]};
    letter-spacing: ${({ theme }) => theme.letterSpacing[5]};
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: ${({ theme }) => theme.fontSize[4]};
    line-height: ${({ theme }) => theme.lineHeight[4]};
    letter-spacing: ${({ theme }) => theme.letterSpacing[4]};
  }
`;

export default Hero;

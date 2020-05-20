// node_modules imports
import React, { useContext } from 'react';
import styled from 'styled-components';

// project imports
import Header from 'components/Common/Header';
import Hero from 'components/PortfolioPage/Hero';
import Form from 'components/PortfolioPage/Form';
import Metrics from 'components/PortfolioPage/Metrics';
import Equity from 'components/PortfolioPage/Equity';
import Weights from 'components/PortfolioPage/Weights';
import Footer from 'components/Common/Footer';
import Loader from 'components/Common/Loader';
import PortfoliosContext from 'context';

/*
Wrapper component for the portfolio page.
Adds background
*/

const PortfolioPage = (props) => {
  const { portfolios } = useContext(PortfoliosContext);

  if (!portfolios) return <Loader />;

  return (
    <Wrapper>
      <Background>
        <Header />
        <main>
          <Hero />
          <Form />
          <Metrics />
          <Equity />
          <Weights />
        </main>
        <Footer />
      </Background>
    </Wrapper>
  );
};

// private styled components
const Wrapper = styled.div``;

const Background = styled.div`
  background: radial-gradient(
      circle at top center,
      rgba(4, 225, 163, 0.3) 0%,
      rgba(4, 225, 163, 0.1) 20%,
      rgba(4, 225, 163, 0.01) 40%
    ),
    radial-gradient(
      circle at bottom center,
      rgba(4, 225, 163, 0.3) 0%,
      rgba(4, 225, 163, 0.1) 20%,
      rgba(4, 225, 163, 0.01) 40%
    );
`;

// export
export default PortfolioPage;

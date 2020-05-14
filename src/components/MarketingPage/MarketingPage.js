// node_modules imports
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// project imports
import Header from 'components/Common/Header';
import Hero from 'components/MarketingPage/Hero';
import Features from 'components/MarketingPage/Features';
import Advantages from 'components/MarketingPage/Advantages';
import Benefits from 'components/MarketingPage/Benefits';
import Footer from 'components/Common/Footer';

/*
feature list = triple feature with icons
diversification = feature list with image
trend filter = feature list with image
minimum volatility = feature list with image

*/
const MarketingPage = (props) => {
  return (
    <Wrapper>
      <Background>
        <Header />
        <Hero />
        <Features />
        <Advantages />
        <Benefits />
        <Footer />
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Background = styled.div`
  background: radial-gradient(
      circle at top center,
      rgba(4, 225, 163, 0.3) 0%,
      rgba(4, 225, 163, 0.15) 15%,
      rgba(4, 225, 163, 0) 30%
    ),
    radial-gradient(
      circle at 100% 40%,
      rgba(4, 225, 163, 0.3) 0%,
      rgba(4, 225, 163, 0.15) 15%,
      rgba(4, 225, 163, 0) 30%
    ),
    radial-gradient(
      circle at 0% 60%,
      rgba(4, 225, 163, 0.3) 0%,
      rgba(4, 225, 163, 0.15) 15%,
      rgba(4, 225, 163, 0) 30%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(4, 225, 163, 0.3) 0%,
      rgba(4, 225, 163, 0.15) 15%,
      rgba(4, 225, 163, 0) 30%
    );
`;

export default MarketingPage;

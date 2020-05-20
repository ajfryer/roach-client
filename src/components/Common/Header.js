// node_modules imports
import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

// project imports
import Logo from 'components/Common/Logo';

const Header = () => {
  return (
    <>
      <Route exact path="/">
        <MarketingHeader>
          <HeaderOuter>
            <HeaderInner>
              <Logo />
            </HeaderInner>
          </HeaderOuter>
        </MarketingHeader>
      </Route>
      <Route path="/portfolio">
        <PortfolioHeader>
          <HeaderOuter>
            <HeaderInner>
              <Logo />
            </HeaderInner>
          </HeaderOuter>
        </PortfolioHeader>
      </Route>
    </>
  );
};

// private styled components
const MarketingHeader = styled.header`
  padding: 0.5rem 0;
  grid-area: header;
`;

const PortfolioHeader = styled.header`
  padding: 0.5rem 0;
  grid-area: header;
`;

const HeaderInner = styled.nav`
  display: flex;
  justify-content: center;
`;

const HeaderOuter = styled.div``;

export default Header;

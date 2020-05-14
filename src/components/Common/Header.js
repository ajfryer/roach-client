import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, Route, Switch } from 'react-router-dom';
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

Header.propTypes = {
  active: PropTypes.bool,
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
};

Header.defaultProps = {
  active: false,
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false,
};

const MarketingHeader = styled.header`
  /*
    const classes = classNames(
      'site-header',
      bottomOuterDivider && 'has-bottom-divider',
      className
    );

    get className passed in as well

*/
  padding: 0.5rem 0;
  grid-area: header;
`;

const PortfolioHeader = styled.header`
  /*
    const classes = classNames(
      'site-header',
      bottomOuterDivider && 'has-bottom-divider',
      className
    );

    get className passed in as well

*/
  padding: 0.5rem 0;
  grid-area: header;
`;

const HeaderInner = styled.nav`
  display: flex;
  justify-content: center;
`;

const HeaderOuter = styled.div``;

export default Header;

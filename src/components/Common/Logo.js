import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logoSVG from 'resources/icons/logo-roach-brand.svg';

const RoachLogo = ({ className, ...props }) => {
  return (
    <StyledWrapper {...props}>
      <Link to="/">
        <StyledImage src={logoSVG} alt="" width={85} height={85} />
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /*
put const classes = classNames('brand', className); here
*/
`;

const StyledImage = styled.img``;

export default RoachLogo;

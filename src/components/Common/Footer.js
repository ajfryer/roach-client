// node_modules imports
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// project imports
import Logo from 'components/Common/Logo';

const Footer = (props) => {
  return (
    <Section type="fixed-width">
      <Logo />
      <Disclaimer>
        Roach is a public project to help investors learn about alternative
        investments. It is not intended to be a solicitation for any product or
        service and is intended for information purposes only. Hypothetical
        simulations do not represent real historical investments and past
        performance is not indicative of future results. All investing carries
        significant risk of loss. Please consult an investment professional
        before you make any investing decisions!
        <br />
        <br />
        For 2001 to 2019, data for stocks, bonds, and gold are represented by
        total return indicies. (MSCI world Index, Barclays US Treasury Index,
        GSCI gold index respectively) Data for stocks, bonds, and gold beginning
        in March 2020 come from the following ETFs. (URTH, GOVT, GLD
        respectively) For futures, all data comes from the SocGen Trend Index, a
        representative sample of trend following managed futures programs. All
        data and calculations have not been audited and cannot be guarranteed to
        be correct.
        <br />
        <br />
        This site was created with react and express and hosted on zeit and
        heroku. Data is from yahoo and socgen's website. I thank all users who
        gave me feedback on the function and design. If you want to see more of
        my projects or contact me, please visit my{' '}
        <Link to="www.alexjfryer.com">portfolio site!</Link>
        <br />
        <br />
        Font made from{' '}
        <a href="http://www.onlinewebfonts.com">Online Web Fonts</a> is licensed
        by CC BY 3.0
      </Disclaimer>
    </Section>
  );
};

// private styled components
const Section = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ type, theme }) =>
    type === 'fixed-width' ? theme.maxWidth : '100%'};
  margin: 6rem auto 0 auto;
  padding: 0 1rem 3rem 1rem;
`;

const Disclaimer = styled.div`
  font-size: ${({ theme }) => theme.fontSize[1]};
  text-align: justify;
  margin-top: 3rem;
  color: ${({ theme }) => theme.color.grey[4]};
  font-size: ${({ theme }) => theme.fontSize[4]};
  line-height: ${({ theme }) => theme.lineHeight[4]};
  letter-spacing: ${({ theme }) => theme.letterSpacing[6]};
  color: #8aedcf;
`;

export default Footer;

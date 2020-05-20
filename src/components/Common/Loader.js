// node_modules imports
import React, { useContext } from 'react';
import styled from 'styled-components';

// project imports
import PortfoliosContext from 'context';

const Loader = ({ children }) => {
  const { loading, portfolios } = useContext(PortfoliosContext);

  if (loading || !portfolios) {
    return (
      <Container type={!!portfolios}>
        <Spinner>
          {Array(12)
            .fill(<div></div>)
            .map((_, i) => (
              <div key={i}></div>
            ))}
        </Spinner>
        loading!
      </Container>
    );
  } else {
    return <>{children}</>;
  }
};

// private styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${({ type }) => (type ? '100%' : '100vh')};
  width: 100%;
  font-size: 20px;
`;

const Spinner = styled.div`
  color: ${({ theme }) => theme.color.primary.regular};
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-bottom: 0.5rem;

  div {
    transform-origin: 40px 40px;
    animation: lds-spinner 1.2s linear infinite;
  }
  div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 3px;
    left: 37px;
    width: 6px;
    height: 18px;
    border-radius: 20%;
    background: ${({ theme }) => theme.color.primary.regular};
  }
  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Loader;

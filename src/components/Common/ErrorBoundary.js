import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Common/Logo';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error(error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <Page>
          <Logo />
          <h1>404 Error - Page Not Found</h1>
        </Page>
      );
    }
    return this.props.children;
  }
}

const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 2rem;
  }
`;

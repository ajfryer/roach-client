import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import Light from 'resources/fonts/DINOT-Light.ttf';
import Regular from 'resources/fonts/DINOT-Regular.ttf';
import Medium from 'resources/fonts/DINOT-Medium.ttf';
import Bold from 'resources/fonts/DINOT-Bold.ttf';
import Black from 'resources/fonts/DINOT-Black.ttf';
import Italic from 'resources/fonts/DINOT-Italic.ttf';

const Theme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  );
};

// dynamic theme object
export const theme = {
  // typography
  fontFamily: {
    dinot: {
      light: "'DINOT-Light', sans-serif",
      regular: "'DINOT-Regular', sans-serif",
      medium: "'DINOT-Medium', sans-serif",
      bold: "'DINOT-Bold', sans-serif",
      black: "'DINOT-Black', sans-serif",
    },
  },
  fontSize: {
    1: '52px',
    2: '44px',
    3: '32px',
    4: '24px',
    5: '20px',
    6: '18px',
    7: '16px',
    8: '14px',
  },
  lineHeight: {
    1: '62px',
    2: '54px',
    3: '42px',
    4: '34px',
    5: '30px',
    6: '28px',
    7: '24px',
    8: '22px',
  },
  letterSpacing: {
    1: '-0.3px',
    2: '-0.3px',
    3: '-0.3px',
    4: '-0.1px',
    5: '-0.1px',
    6: '-0.1px',
    7: '-0.1px',
    8: null,
  },

  // layout
  borderRadius: {
    small: '4px',
    large: '8px',
    round: '50%',
    square: '0px',
  },
  padding: {
    card: {
      mobile: '16px',
      tablet: '20px',
      desktop: '24px',
    },
    section: {
      mobile: '46px',
      tablet: '64px',
      desktop: '80px',
    },
  },
  breakpoint: {
    tablet: '768px',
    desktop: '1024px',
  },
  maxWidth: '1024px;',

  // styles
  color: {
    grey: {
      1: '#FCFEFF',
      2: '#F9F8F7',
      3: '#F1F4F0',
      4: '#EEEDEA',
      5: '#a4b0be',
      6: '#434f59',
      7: '#38424a',
      8: '#2d353b',
    },
    primary: {
      light: '#04E1A3',
      regular: '#20ce99',
      dark: '#38424A',
    },
    accent: {
      red: '#F1563B',
    },
  },
  boxShadow: {
    1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
};

// global styles
export const GlobalStyles = createGlobalStyle`

  /* css reset styles*/
  ${normalize}

  /* font styles */
  @font-face {
  font-family: 'DINOT-Light';
  src: local('DINOT-Light'), url(${Light}) format('truetype');
  }
  @font-face {
    font-family: 'DINOT-Regular';
    src: local('DINOT-Regular'), url(${Regular}) format('truetype');
  }
  @font-face {
    font-family: 'DINOT-Medium';
    src: local('DINOT-Medium'), url(${Medium}) format('truetype');
  }
  @font-face {
    font-family: 'DINOT-Bold';
    src: local('DINOT-Bold'), url(${Bold}) format('truetype');
  }
  @font-face {
    font-family: 'DINOT-Black';
    src: local('DINOT-Black'), url(${Black}) format('truetype');
  }
  @font-face {
    font-family: 'DINOT-Italic';
    src: local('DINOT-Italic'), url(${Italic}) format('truetype');
  }

  /* box styles */
  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  * { 
    margin: 0; 
    padding: 0; 
    border: 0; 
  }

  /* page styles */
  body {
    background: ${({ theme }) =>
      theme.color.primary
        .dark}; /* Fallback for when there is no custom background color defined. */
    color: ${({ theme }) => theme.color.grey[1]};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: ${({ theme }) => theme.fontFamily.dinot.light};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary.light}
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.color.primary.light};
    font-family: ${({ theme }) => theme.fontFamily.dinot.medium}
  }

  @keyframes anim-glow {
    0% {
      box-shadow: 0 0 rgba(${({ theme }) => theme.color.primary.light}, 1);
    }
    100% {
      box-shadow: 0 0 15px 10px transparent;
    }
  }

`;

export default Theme;

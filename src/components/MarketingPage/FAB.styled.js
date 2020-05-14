import styled from 'styled-components';

export const FABSection = styled.section`
  max-width: ${({ type, theme }) =>
    type === 'fixed-width' ? theme.maxWidth : '100%'};
  margin: 3rem auto;
  padding: 6rem 1rem;
`;

export const FABContent = styled.div`
  flex-grow: 1;
  flex-basis: 0;

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
  }
`;

export const FABHeader = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  h2 {
    margin-bottom: 3rem;
    font-size: ${({ theme }) => theme.fontSize[3]};
    line-height: ${({ theme }) => theme.lineHeight[3]};
    letter-spacing: ${({ theme }) => theme.letterSpacing[3]};

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      font-size: ${({ theme }) => theme.fontSize[2]};
      line-height: ${({ theme }) => theme.lineHeight[2]};
      letter-spacing: ${({ theme }) => theme.letterSpacing[2]};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      font-size: ${({ theme }) => theme.fontSize[1]};
      line-height: ${({ theme }) => theme.lineHeight[1]};
      letter-spacing: ${({ theme }) => theme.letterSpacing[1]};
    }
  }

  p {
    text-align: center;
    margin-bottom: 0.25rem;
    font-family: ${({ theme }) => theme.fontFamily.dinot.medium};
    font-size: ${({ theme }) => theme.fontSize[7]};
    line-height: ${({ theme }) => theme.lineHeight[7]};
    letter-spacing: ${({ theme }) => theme.letterSpacing[7]};

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      font-size: ${({ theme }) => theme.fontSize[6]};
      line-height: ${({ theme }) => theme.lineHeight[6]};
      letter-spacing: ${({ theme }) => theme.letterSpacing[6]};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      font-size: ${({ theme }) => theme.fontSize[4]};
      line-height: ${({ theme }) => theme.lineHeight[4]};
      letter-spacing: ${({ theme }) => theme.letterSpacing[4]};
    }
  }
`;

export const FABCard = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 0.25rem;
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize[4]};
    margin-bottom: 1rem;
  }

  p {
    margin: 0 auto;
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize[7]};
    line-height: ${({ theme }) => theme.lineHeight[7]};
    letter-spacing: ${({ theme }) => theme.letterSpacing[7]};
    color: ${({ theme }) => theme.color.grey[1]};

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
      width: 75%;
      font-size: ${({ theme }) => theme.fontSize[6]};
      line-height: ${({ theme }) => theme.lineHeight[6]};
      letter-spacing: ${({ theme }) => theme.letterSpacing[6]};
    }

    @media screen and (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
      font-size: ${({ theme }) => theme.fontSize[5]};
      line-height: ${({ theme }) => theme.lineHeight[5]};
      letter-spacing: ${({ theme }) => theme.letterSpacing[5]};
    }
  }
`;

export default {
  FABSection,
  FABContent,
  FABHeader,
  FABCard,
};

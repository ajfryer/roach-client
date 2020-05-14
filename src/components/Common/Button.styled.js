import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.primary.regular};
  color: ${({ theme }) => theme.color.grey[8]};

  padding: 1rem 2rem;
  text-decoration: none !important;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  transition: background 0.15s ease;
  margin: 0;
  font-family: ${({ theme }) => theme.fontFamily.dinot.bold};

  &:focus,
  &[focus] {
    animation: anim-glow 3s ease infinite;
    box-shadow: 0 0 ${({ theme }) => theme.color.primary.light};
    outline: none;
    border: none;
  }

  &:disabled,
  &[disabled] {
    background-color: #cccccc;
    color: #666666;
  }
`;

Button.propTypes = {};

Button.defaultProps = {};

export default Button;

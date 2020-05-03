import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledWrapper = styled.button`
  background: none;
  padding: 0;
  border: 0;
  display: block;
`;

const StyledLink = styled(Link)`
  padding: 1.2em 3em;
  background: ${({ theme, secondary }) => (secondary ? 'none' : theme.primary)};
  box-shadow: ${({ theme, secondary }) =>
    secondary ? `inset 0 0 0 4px ${theme.primary}` : 'none'};
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = ({ children, to, secondary, ...props }) => (
  <StyledWrapper {...props}>
    <StyledLink to={to} secondary={secondary}>
      {children}
    </StyledLink>
  </StyledWrapper>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  to: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
};

Button.defaultProps = {
  secondary: false,
};

export default Button;

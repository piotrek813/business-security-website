import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

const StyledWrapper = styled(Link)`
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

const Button = ({ children, to, secondary }) =>
  to.includes('#') ? (
    <StyledWrapper
      as={AnchorLink}
      to={to}
      secondary={secondary ? 1 : undefined}
    >
      {children}
    </StyledWrapper>
  ) : (
    <StyledWrapper to={to} secondary={secondary ? 1 : undefined}>
      {children}
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

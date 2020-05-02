import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = styled(Link)`
  padding: 0.8em 3.4em;
  background: ${({ theme, secondary }) => (secondary ? 'none' : theme.primary)};
  border: ${({ theme, secondary }) =>
    secondary ? `3px solid ${theme.primary}` : 'none'};
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Button;

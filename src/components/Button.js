import styled from 'styled-components';

const Button = styled.button`
  padding: 0.8em 3.4em;
  background: ${({ theme, secondary }) => (secondary ? 'none' : theme.primary)};
  border: ${({ theme, secondary }) =>
    secondary ? `3px solid ${theme.primary}` : 'none'};
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  display: inline;
`;

export default Button;

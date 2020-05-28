import styled, { css } from 'styled-components';
import media from 'utils/media';

const H1 = styled.h2`
  font-size: 25px;
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  ${({ theme, bgColor }) =>
    bgColor !== 'dark' &&
    css`
      color: ${theme.secondary};
    `};

  ${media.medium`
      font-size: 28px;
  `}

  ${media.big`
      font-size: 32px;
  `}
`;

export default H1;

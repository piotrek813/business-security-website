import styled, { css } from 'styled-components';
import media from 'utils/media';

const Img = styled.img`
  width: 100%;
  height: 235px;
  object-fit: cover;
  margin-bottom: 24px;

  ${({ isMirror }) =>
    isMirror &&
    css`
      grid-column: 2;
      grid-row: 1;
    `}

  ${media.small`
      height: 320px;
  `}

  ${media.medium`
      height: auto;
  `}

  ${media.big`
      height: 100%;
  `}
`;

export default Img;

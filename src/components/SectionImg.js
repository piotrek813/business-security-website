import styled, { css } from 'styled-components';
import media from 'utils/media';
import Img from 'gatsby-image';

const Image = styled(Img)`
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
      min-height: 250px;
  `}

  ${media.medium`
      min-height: ${({ isMuchText }) => (!isMuchText ? '450px' : '100%')};
  `}
`;

export default Image;

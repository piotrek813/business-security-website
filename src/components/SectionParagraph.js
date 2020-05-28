import styled from 'styled-components';
import media from 'utils/media';

const P = styled.p`
  margin: 2px 0 10px 0;

  ${media.medium`
      font-size: 18px;
  `}

  ${media.big`
      font-size: 20px;
  `}
`;

export default P;

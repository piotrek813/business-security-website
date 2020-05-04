import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';

const StyledWrapper = styled.footer`
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.white};
  padding: 38px 46px;

  ${media.big`
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    padding: 33px 115px;
  `}
`;

const P = styled.p`
  margin-bottom: 27px;

  ${media.big`
      margin-bottom: 32px;
      font-size: 18px;
  `}
`;

const H5 = styled.h5`
  font-size: 16px;
  margin: 0 0 8px 0;
`;

const Blog = styled.div`
  display: grid;
  grid-gap: 5px 85px;

  ${media.xsmall`
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  `};
`;

const UL = styled.ul`
  list-style-position: inside;
  margin: 0;
  padding: 0;
`;

const Footer = () => (
  <StyledWrapper>
    <P>
      Strona korzysta z plików cookies w celu śledzenia zachowania użytkownika
      na stronie. ©2020 SomeCompany
    </P>
    <div>
      <H5>Zobacz nasze najnowsze artykuły:</H5>
      <Blog>
        <UL>
          <li>Lorem, ipsum dolor. Lorem Lorem, ipsum.</li>
          <li>Nisi, quod veritatis.</li>
          <li>Dolorum, tempora optio!</li>
          <li>Quibusdam, pariatur minus?</li>
        </UL>
        <UL>
          <li>Excepturi, nesciunt eum?</li>
          <li>Sed, natus numquam!</li>
          <li>Impedit, alias minima.</li>
          <li>Modi, a pariatur.</li>
        </UL>
        <UL>
          <li>Unde, atque ullam?</li>
          <li>Placeat, molestias repellat!</li>
          <li>Quae, velit illo.</li>
          <li>Accusantium, beatae error?</li>
        </UL>
      </Blog>
    </div>
  </StyledWrapper>
);

export default Footer;

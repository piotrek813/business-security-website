import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import Hero from 'components/Hero';

const StyledWrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledContent = styled.section`
  align-items: center;
  color: ${({ theme }) => theme.white};
  text-align: center;
  width: 90%;
  margin: 0 auto;

  ${media.medium`
      width: 890px;
  `}
`;

const H1 = styled.h1`
  font-size: 27px;
  margin: 0;

  ${media.xsmall`
      font-size: 38px;
  `}

  ${media.medium`
      font-size: 50px;
  `}

  ${media.big`
      font-size: 60px;
  `}
`;

const P = styled.p`
  font-size: 15px;
  margin: 0;

  ${media.xsmall`
      font-size: 16px;
  `}

  ${media.medium`
      font-size: 17px;
  `}

  ${media.big`
      font-size: 20px;
  `}
`;

const HeaderTemplate = () => (
  <StyledWrapper>
    <Hero />
    <StyledContent>
      <H1>Bezpieczeństwo Biznesowe</H1>
      <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget risus
        faucibus cras massa. Neque ultrices diam vitae nibh arcu. Feugiat semper
        quis a pellentesque mi, in aliquet. Eget sed malesuada quis velit.
      </P>
    </StyledContent>
  </StyledWrapper>
);

export default HeaderTemplate;

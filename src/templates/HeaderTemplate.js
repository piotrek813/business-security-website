import React from 'react';
import styled from 'styled-components';
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
  padding: 0 25px;
`;

const H1 = styled.h1`
  font-size: 27px;
  margin: 0;
`;

const P = styled.p`
  font-size: 15px;
  margin: 0;
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

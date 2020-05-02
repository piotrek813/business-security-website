import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import Hero from 'components/Hero';
import Button from 'components/Button';

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

const Actions = styled.div`
  display: grid;
  margin: 23px auto 0 auto;
  width: 60%;
  grid-gap: 8px;

  ${media.xsmall`
      width: 450px;
      grid-template-columns: 1fr 1fr;
  `}
`;

const StyledButton = styled(Button)`
  ${media.big`
      padding: 1em 3.4em;
  `}
`;

const HeaderTemplate = ({ hero: { heading, paragraph } }) => (
  <StyledWrapper>
    <Hero />
    <StyledContent>
      <H1>{heading}</H1>
      {paragraph !== '' && <P>{paragraph}</P>}
      <Actions>
        <StyledButton to="/kontakt">Kontakt</StyledButton>
        <StyledButton as="a" href="/#services" secondary>
          Moja oferta
        </StyledButton>
      </Actions>
    </StyledContent>
  </StyledWrapper>
);

HeaderTemplate.propTypes = {
  hero: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default HeaderTemplate;

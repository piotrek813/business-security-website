import React from 'react';
import styled, { css } from 'styled-components';
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
  width: fit-content;
  margin: 23px auto 0 auto;
  display: grid;
  grid-auto-columns: 1fr;
  grid-gap: 5px;
  z-index: 9998;

  ${({ isOne }) =>
    !isOne &&
    css`
      ${media.small`
        grid-template-columns: 1fr 1fr;
    `}
    `}
`;

const Watermark = styled.span`
  color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  opacity: 0.2;
  font-size: 10vw;
  padding: 20px 5px;
  width: 100%;
  text-align: center;

  ${media.xsmall`
      font-size: 6vw;
  `}
`;

const HeaderTemplate = ({ heading, paragraph, buttons, heroImage }) => (
  <StyledWrapper>
    <Hero image={heroImage} />
    <Watermark>Safety & Security</Watermark>
    <StyledContent>
      <H1>{heading}</H1>
      {paragraph !== '' && <P>{paragraph}</P>}
      <Actions isOne={buttons.length === 1}>
        {!buttons.length ? (
          <>
            <Button to="/kontakt">Kontakt</Button>
            <Button to="/#services" secondary>
              Moja oferta
            </Button>
          </>
        ) : (
          buttons.map(({ to, label }) => (
            <Button key={to} to={to}>
              {label}
            </Button>
          ))
        )}
      </Actions>
    </StyledContent>
  </StyledWrapper>
);
HeaderTemplate.propTypes = {
  heroImage: PropTypes.objectOf(PropTypes.object).isRequired,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(PropTypes.object),
};

HeaderTemplate.defaultProps = {
  buttons: [],
};

export default HeaderTemplate;

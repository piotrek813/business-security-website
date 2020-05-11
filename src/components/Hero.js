import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import Img from 'gatsby-image';

const StyledImg = styled(Img)`
  ${({ isPost }) =>
    !isPost
      ? css`
          position: absolute !important;
          top: 0;
          left: 0;
          width: 100%;
          z-index: -1;
          height: 100vh;
        `
      : css`
          position: relative !important;
          width: 100%;
          height: 60vh;
          margin: 0 auto;

          ${media.medium`
              width: 70%;
          `}
        `}

  img {
    object-fit: cover !important;
    object-position: center center !important;
  }
`;

const Hero = ({ isPost, image }) => (
  <StyledImg
    isPost={isPost}
    fluid={image.fluid}
    alt={image.alt}
    title={image.title}
  />
);

Hero.propTypes = {
  image: PropTypes.objectOf(PropTypes.object).isRequired,
  isPost: PropTypes.bool,
};

Hero.defaultProps = {
  isPost: false,
};

export default Hero;

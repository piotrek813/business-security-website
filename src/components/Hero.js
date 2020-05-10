import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const StyledImg = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100vh;

  img {
    object-fit: cover !important;
    object-position: center center !important;
  }
`;

const Hero = ({ image }) => <StyledImg fluid={image.fluid} alt="hero" />;

Hero.propTypes = {
  image: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Hero;

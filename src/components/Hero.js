import React from 'react';
import styled from 'styled-components';
import heroImage from 'images/hero-image-business-security.png';

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Hero = () => <StyledImg src={heroImage} alt="hero" />;

export default Hero;

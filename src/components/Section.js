import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import H2 from 'components/SectionHeading';
import P from 'components/SectionParagraph';
import Image from 'components/SectionImg';

const StyledSection = styled.section`
  background: ${({ theme, bgColor }) =>
    bgColor === 'gray'
      ? theme.gray
      : bgColor === 'dark'
      ? theme.secondary
      : bgColor};
  color: ${({ theme, bgColor }) =>
    bgColor === 'dark' ? theme.white : theme.black};
  ${({ isCenter }) =>
    isCenter &&
    css`
      text-align: center;
    `}

  ${({ isPadding }) =>
    isPadding &&
    css`
      padding: ${({ theme }) => theme.padding.normal};
      ${media.medium`
        padding: ${({ theme }) => theme.padding.medium};
      `}

      ${media.big`
        padding: ${({ theme }) => theme.padding.big};
      `}
    `}
  ${({ image }) =>
    image &&
    css`
      ${media.medium`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 53px;
      `}
    `}
`;

const StyledContent = styled.div`
  margin: auto;
`;

const Section = ({
  heading,
  paragraph,
  image,
  isMirror,
  isCenter,
  bgColor,
  isPadding,
}) => {
  const background = isPadding ? bgColor : 'none';

  return (
    <StyledSection
      bgColor={background}
      isCenter={isCenter}
      isMirror={isMirror}
      isPadding={isPadding}
      image={image}
    >
      {image !== '' && <Image src={image} alt={image} isMirror={isMirror} />}
      <StyledContent>
        {heading !== '' && <H2 bgColor={background}>{heading}</H2>}
        {paragraph !== '' && <P>{paragraph}</P>}
      </StyledContent>
    </StyledSection>
  );
};

Section.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.string,
  image: PropTypes.string,
  isMirror: PropTypes.bool,
  isCenter: PropTypes.bool,
  bgColor: PropTypes.oneOf(['dark', 'gray', 'none']),
  isPadding: PropTypes.bool,
};

Section.defaultProps = {
  heading: '',
  paragraph: '',
  image: '',
  isMirror: false,
  isCenter: false,
  bgColor: 'none',
  isPadding: false,
};

export default Section;

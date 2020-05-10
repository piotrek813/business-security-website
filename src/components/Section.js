import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import H2 from 'components/SectionHeading';
import P from 'components/SectionParagraph';
import Image from 'components/SectionImg';
import Button from 'components/Button';

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

  ${({ theme, isPadding }) =>
    isPadding &&
    css`
      padding: ${theme.padding.normal};
      ${media.medium`
        padding: ${theme.padding.medium};
      `}

      ${media.big`
        padding: ${theme.padding.big};
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
  buttonLink,
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
      {image && (
        <Image
          fluid={image.fluid}
          alt={image.alt}
          title={image.title}
          isMirror={isMirror}
        />
      )}
      <StyledContent>
        {heading !== '' && <H2 bgColor={background}>{heading}</H2>}
        {paragraph !== '' && paragraph.childMarkdownRemark ? (
          <P
            as="div"
            dangerouslySetInnerHTML={{
              __html: paragraph.childMarkdownRemark.html,
            }}
          />
        ) : (
          <P>{paragraph}</P>
        )}
        {buttonLink !== '' && (
          <Button to={buttonLink} isSmall>
            Czytaj dalej
          </Button>
        )}
      </StyledContent>
    </StyledSection>
  );
};

Section.propTypes = {
  heading: PropTypes.string,
  paragraph: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.object),
  ]),
  image: PropTypes.objectOf(PropTypes.object),
  isMirror: PropTypes.bool,
  isCenter: PropTypes.bool,
  bgColor: PropTypes.oneOf(['dark', 'gray', 'none']),
  isPadding: PropTypes.bool,
  buttonLink: PropTypes.string,
};

Section.defaultProps = {
  heading: '',
  paragraph: '',
  image: undefined,
  isMirror: false,
  isCenter: false,
  bgColor: 'none',
  isPadding: false,
  buttonLink: '',
};

export default Section;

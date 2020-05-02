import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';

const StyledWrapper = styled.article`
  display: grid;
  grid-template-rows: 215px 1fr;

  ${({ theme, isBig }) =>
    isBig &&
    css`
      grid-template-rows: auto;
      grid-template-columns: 1fr 1fr;
      height: 530px;
      padding: ${theme.padding.normal};
      ${media.medium`
        padding: ${theme.padding.medium};
      `}

      ${media.big`
        padding: ${theme.padding.big};
      `}
    `}
`;
const StyledContent = styled.div`
  background: ${({ theme }) => theme.white};
  padding: 24px 30px;

  ${({ isBig }) =>
    isBig &&
    css`
      margin: auto;
    `}
`;
const H3 = styled.h3`
  color: ${({ theme }) => theme.secondary};
  margin: 0;
`;
const P = styled.p`
  margin: 7px 0 0 0;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const PostReference = ({ heading, paragraph, image, isBig }) => (
  <StyledWrapper isBig={isBig}>
    <Img src={image} alt={image} />
    <StyledContent>
      <H3>{heading}</H3>
      <P>{paragraph}</P>
    </StyledContent>
  </StyledWrapper>
);

PostReference.propTypes = {
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  isBig: PropTypes.bool,
};

PostReference.defaultProps = {
  isBig: false,
};

export default PostReference;

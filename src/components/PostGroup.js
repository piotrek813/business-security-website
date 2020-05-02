import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import H2 from 'components/SectionHeading';

const StyledWrapper = styled.section`
  background: ${({ theme, bgColor }) =>
    bgColor === 'gray'
      ? theme.gray
      : bgColor === 'dark'
      ? theme.secondary
      : bgColor};

  padding: ${({ theme }) => theme.padding.normal};

  ${media.medium`
      padding: ${({ theme }) => theme.padding.medium};
  `}

  ${media.big`
      padding: ${({ theme }) => theme.padding.big};
  `}
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(304px, 1fr));
  grid-gap: 44px;
`;

const StyledH2 = styled(H2)`
  margin-bottom: 32px;
`;

const PostGroup = ({ heading, bgColor, children }) => (
  <StyledWrapper bgColor={bgColor}>
    <StyledH2>{heading}</StyledH2>
    <Grid>{children}</Grid>
  </StyledWrapper>
);

PostGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  heading: PropTypes.string.isRequired,
  bgColor: PropTypes.oneOf(['dark', 'white', 'gray']),
};

PostGroup.defaultProps = {
  bgColor: 'gray',
};

export default PostGroup;

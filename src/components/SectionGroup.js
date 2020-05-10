import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';

const StyledWrapper = styled.section`
  padding: ${({ theme }) => theme.padding.normal};
  display: grid;
  grid-gap: ${({ isSmallGap }) => (isSmallGap ? '20px' : '88px')};
  background: ${({ theme, bgColor }) =>
    bgColor === 'gray'
      ? theme.gray
      : bgColor === 'dark'
      ? theme.secondary
      : 'bgColor'};

  ${media.medium`
      padding: ${({ theme }) => theme.padding.medium};
  `}

  ${media.big`
      padding: ${({ theme }) => theme.padding.big};
      ${({ isSmallGap }) =>
        isSmallGap &&
        css`
          grid-gap: 27px;
        `}
  `}
`;

const SectionGroup = ({ children, bgColor, isSmallGap }) => (
  <StyledWrapper bgColor={bgColor} isSmallGap={isSmallGap}>
    {children}
  </StyledWrapper>
);

SectionGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  bgColor: PropTypes.oneOf(['dark', 'gray', 'white']),
  isSmallGap: PropTypes.bool,
};

SectionGroup.defaultProps = {
  bgColor: 'white',
  isSmallGap: false,
};

export default SectionGroup;

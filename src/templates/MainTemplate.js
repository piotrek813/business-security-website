import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import theme from 'utils/theme';
import GlobalStyle from 'components/GlobalStyle';
import HeaderTemplate from 'templates/HeaderTemplate';
import Navbar from '../components/Navbar';

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar />
        <HeaderTemplate />
        <main>{children}</main>
      </>
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default MainTemplate;

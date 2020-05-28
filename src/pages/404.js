import React from 'react';
import MainTemplate from 'templates/MainTemplate';

const PageNotFound = () => (
  <MainTemplate
    hero={{
      heading: 'Podana strona nie istnieje',
      paragraph: '',
    }}
  />
);

export default PageNotFound;

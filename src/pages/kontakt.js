import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import media from 'utils/media';
import toList from 'utils/toList';
import MainTemplate from 'templates/MainTemplate';
import { HelmetDatoCms } from 'gatsby-source-datocms';

const StyledWrapper = styled.section`
  text-align: left;
  padding: ${({ theme }) => theme.padding.normal};
  display: grid;
  grid-gap: 40px;

  ul {
    margin: 0;
    padding: 0;
  }

  ${media.medium`
      padding: ${({ theme }) => theme.padding.medium};
      grid-template-columns: 1fr 1fr;
  `}

  ${media.big`
      padding: ${({ theme }) => theme.padding.big};
  `}
`;

const Div = styled.p`
  margin: auto;
  ${media.medium`
      font-size: 18px;
  `}

  ${media.big`
      font-size: 20px;
  `}
`;

const Iframe = styled.iframe`
  border: none;
  height: 400px;
  width: 100%;

  ${media.big`
      height: 550px;
  `}
`;

const ContactPage = ({ data: { datoCmsContact } }) => (
  <MainTemplate
    hero={{
      heading: datoCmsContact.heading,
      paragraph: datoCmsContact.subtitle,
      buttons: [{ to: '/#services', label: 'Moja oferta' }],
    }}
  >
    <HelmetDatoCms seo={datoCmsContact.seoMetaTags} />
    <StyledWrapper>
      <Div as="div">{toList(datoCmsContact.contactData)}</Div>
      <Iframe
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBGvgEM6YATtB-caoj-ODWkMQGcTjakNis&q=Aleja+Komisji+Edukacji+Narodowej+47,Warszawa+Polska&zoom=15"
        allowfullscreen
      />
    </StyledWrapper>
  </MainTemplate>
);

export const query = graphql`
  query ContactQuery {
    datoCmsContact {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      heading
      subtitle
      contactData
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ContactPage;

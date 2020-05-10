import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import media from 'utils/media';
import MainTemplate from 'templates/MainTemplate';
import { HelmetDatoCms } from 'gatsby-source-datocms';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import H2 from 'components/SectionHeading';
import P from 'components/SectionParagraph';
import ContactItem from 'components/ContactItem';

const StyledWrapper = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.padding.normal};

  ${media.small`
      margin: 0 auto;
      width: 500px;
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
      <H2>Lorem ipsum dolor sit ament</H2>
      <P>
        Nulla odio nibh fermentum orci nisi eu lobortis ultrices vel, facilisis
        magna eu pretium enim adipiscing adipiscing libero eget consequat orci
        varius volutpat habitant amet lectus tempor cursus id convallis duis in
        tellus purus
      </P>
      <ContactItem icon={faEnvelope} info={datoCmsContact.phone} />
      {datoCmsContact.email && (
        <ContactItem icon={faPhone} info={datoCmsContact.email} />
      )}
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
      phone
      email
    }
  }
`;

ContactPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ContactPage;

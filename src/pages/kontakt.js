import React from 'react';
import styled from 'styled-components';
import media from 'utils/media';
import MainTemplate from 'templates/MainTemplate';
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

const ContactPage = () => (
  <MainTemplate
    hero={{
      heading: 'Kontakt',
      paragraph: '',
      buttons: [{ to: '/#services', label: 'Moja oferta' }],
    }}
  >
    <StyledWrapper>
      <H2>Lorem ipsum dolor sit ament</H2>
      <P>
        Nulla odio nibh fermentum orci nisi eu lobortis ultrices vel, facilisis
        magna eu pretium enim adipiscing adipiscing libero eget consequat orci
        varius volutpat habitant amet lectus tempor cursus id convallis duis in
        tellus purus
      </P>
      <ContactItem icon={faEnvelope} info="exaple@gmail.com" />
      <ContactItem icon={faPhone} info="+48 784 312 123" />
    </StyledWrapper>
  </MainTemplate>
);

export default ContactPage;

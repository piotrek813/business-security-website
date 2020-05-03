import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import media from 'utils/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

const ContactIcon = styled(FontAwesomeIcon)`
  font-size: 23px;
`;

const ContactInfo = styled.span`
  margin-left: 4px;
  ${media.small`
      font-size: 18px;
  `}
`;

const ContactItem = ({ icon, info }) => (
  <StyledWrapper>
    <ContactIcon icon={icon} />
    <ContactInfo>{info}</ContactInfo>
  </StyledWrapper>
);

ContactItem.propTypes = {
  icon: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  ).isRequired,
  info: PropTypes.string.isRequired,
};

export default ContactItem;

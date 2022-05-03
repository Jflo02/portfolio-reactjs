import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';

const ContactStyles = styled.div`
  padding: 10rem 0;
`;

const Contact = () => (
  <ContactStyles>
    <PText>
      Vous pouvez me contacter par mail:
      <a href="mailto:florimond.jaulin@epsi.fr">
        <b> M'envoyer un mail </b>
      </a>
    </PText>
    <PText>
      Vous pouvez également me contacter sur linkedIn :
      <a href="https://www.linkedin.com/in/florimond-jaulin/">
        <b> Mon linkedIn </b>
      </a>
    </PText>
  </ContactStyles>
);

export default Contact;

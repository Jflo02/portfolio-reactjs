import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Florimond Jaulin</h1>
          <PText>
            Actuellement en deuxième année d'informatique je suis à la recherche
            d'une alternance pour septembre 2022
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'link',
              },
              {
                title: 'Competences',
                path: '/competences',
                type: 'link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: '+33',
                path: 'tel+33777',
              },
              {
                title: 'mail',
                path: 'mailto:florimond.jaulin@epsi.fr',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Links"
            links={[
              {
                title: 'LinkedIn',
                path: 'https://www.linkedin.com/in/florimond-jaulin-6965171b8/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>© 2022 Florimond Jaulin | Tous droits réservés</PText>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;

import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';

const SkillsSectionStyle = styled.div`
  padding: 10rem 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }

  .skillsSection__left {
    flex: 1;
  }

  .section-title {
    text-align: left;
  }

  .para {
    margin-top: 2rem;
    margin-left: 0;
  }

  .skillsSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .skillsSection__left {
      width: 100%;
    }
    .section-tile: {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .skillsSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

function SkillsSection() {
  return (
    <SkillsSectionStyle>
      <div className="container">
        <div className="skillsSection__left">
          <SectionTitle
            subheading="Let me show you my competences"
            heading="About my skills"
          />
          <PText>
            Je suis à l'aise dans le développement web avec les technologies
            React, le javascript. Je sais également utiliser Symfony. Je
            m'intéresse au déploiement et notamment à travers de Docker sur
            lequel je me suis formé.
          </PText>
          <div className="skillsSection__buttons">
            <Button btnLink="/skills" btnText="competences" outline />
          </div>
        </div>
      </div>
    </SkillsSectionStyle>
  );
}

export default SkillsSection;

import React from 'react';
import styled from 'styled-components';
import { SRLWrapper } from 'simple-react-lightbox';
import excelCompetences from '../assets/images/excel-competences.png';
import excelCompetencesSheet from '../assets/images/excel-competences.xlsx';
import BtsSkillsInteractive from '../components/BtsSkillsInteractive';
import SectionTitle from '../components/SectionTitle';
import PText from '../components/PText';

const SKillsStyles = styled.div`
  padding: 10rem 0;
  .img__excel {
    width: 100%;
    margin-top: 8rem;
  }
  .explicationInteractif {
    margin: 2.8rem;
  }
  .downloadExcel {
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      width: 50%;
    }
  }
`;

function Skills() {
  return (
    <SKillsStyles>
      <div className="container">
        <SectionTitle heading="Competences" subheading="Mes" />
        <div className="explicationInteractif">
          <PText>
            <b>
              Ce tableau est interactif, vous pouvez appuyer sur les cases
              vertes pour voir les compétences associées.
            </b>
          </PText>
        </div>
        <BtsSkillsInteractive />
        <div className="downloadExcel">
          <PText>
            <a href={excelCompetencesSheet}>
              Télécharger le tableau au format Excel
            </a>
          </PText>
        </div>
        <div className="img__excel">
          <SRLWrapper>
            <img src={excelCompetences} alt="competences bts" width="100px" />
          </SRLWrapper>
        </div>
      </div>
    </SKillsStyles>
  );
}

export default Skills;

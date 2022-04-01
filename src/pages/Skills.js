import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import excelCompetences from '../assets/images/excel-competences.png';
import BtsSkillsInteractive from '../components/BtsSkillsInteractive';

const SKillsStyles = styled.div`
  padding: 10rem 0;
  .img__excel {
    width: 100%;
    margin-top: 8rem;
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
        <BtsSkillsInteractive />
        <div className="img__excel">
          <Link
            to={{
              pathname: '/image',
              state: { img: excelCompetences },
            }}
            key="lalal"
          >
            <img src={excelCompetences} alt="competences bts" width="100px" />
          </Link>
        </div>
      </div>
    </SKillsStyles>
  );
}

export default Skills;

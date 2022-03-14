import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import excelCompetences from '../assets/images/excel-competences.png';

const SKillsStyles = styled.div`
  padding: 10rem 0;

  .img__excel {
    width: 100%;
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
        <div className="img__excel">
          {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events */}
          <Link to="/skillssheet" target="blank">
            <img
              src={excelCompetences}
              alt="competences bts"
              width="100px"
              // onClick={handleClick}
            />
          </Link>
        </div>
      </div>
    </SKillsStyles>
  );
}

export default Skills;

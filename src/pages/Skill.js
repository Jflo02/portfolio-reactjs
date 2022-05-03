/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SRLWrapper } from 'simple-react-lightbox';
import styled from 'styled-components';
import projects from '../assets/data/projects';
import PText from '../components/PText';

const SKillStyles = styled.div`
  padding: 10rem 0;
  .title {
    width: 100%;
    margin-bottom: 10rem;
  }
  .corps {
    width: 100%;
    display: flex;
    flex-direction: column;
    img {
      width: 50%;
    }
    .skill {
      width: 100%;
      display: flex;
      flex-direction: row;
      padding: 10px;
      justify-content: space-around;
      margin-bottom: 10rem;
      .pointEdgeGauche {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 1500px;
      }
      .skillPartieDroite {
        margin-left: 6rem;
      }
    }
    .text {
      width: 100%;
      display: flex;
      flex-direction: row;
      .idee {
        margin-right: 20px;
        margin-left: 20px;
      }
    }
    .line {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 30px;
      .divImages {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        img {
          margin-left: 4rem;
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .container {
      width: 50%;
    }
  }
`;

function Skills({ location }) {
  const [skills] = useState(
    location.state || JSON.parse(localStorage.getItem('skills'))
  );

  const setInLocalStorage = () => {
    if (location.state) {
      localStorage.setItem('skills', JSON.stringify(location.state));
    }
  };

  useEffect(setInLocalStorage);

  return (
    <SKillStyles>
      <div className="container">
        <div className="title">
          <h1>{skills[0].nomDomaine}</h1>
        </div>
        <div className="corps">
          {skills.map((skill) => (
            <div className="skill">
              <div className="pointEdgeGauche">
                <h3>
                  <b>{skill.idee}</b>
                </h3>
              </div>
              <div className="skillPartieDroite">
                <div className="text">
                  <div>
                    <h3>{skill.descriptionCompetence}</h3>
                  </div>
                </div>
                {skill.screenCompetence && (
                  <div className="line">
                    <div className="divImages">
                      <PText>Compétence</PText>
                      <SRLWrapper>
                        <img src={skill.screenCompetence} alt="skill proof" />
                      </SRLWrapper>
                    </div>
                    {skill.projectName && (
                      <Link
                        to={{
                          pathname: '/project',
                          state: projects.filter(
                            (item) => item.name === skill.projectName
                          )[0],
                        }}
                        key="lalal"
                      >
                        <div className="divImages">
                          <PText>Projet</PText>
                          <img
                            src={
                              projects.filter(
                                (item) => item.name === skill.projectName
                              )[0].img
                            }
                            alt="project link proof"
                          />
                        </div>
                      </Link>
                    )}
                    {skill.lien && (
                      <h3>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={skill.lien.url}
                        >
                          {skill.lien.libelle}
                        </a>
                      </h3>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SKillStyles>
  );
}

export default Skills;

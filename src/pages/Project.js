/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-this-in-sfc */
import React, { useEffect } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import useState from 'react-usestateref';
import styled from 'styled-components';

const ProjectStyles = styled.div`
  padding: 10rem 0;
  display: flex;
  flex-direction: column;
  margin-left: 8rem;
  margin-right: 8rem;
  font-size: 1.3rem;
  text-align: justify;
  .title {
    width: 100%;
    margin: 10px;
  }
  .description__generale {
    width: 100%;
    margin: 1rem;
  }
  .corps {
    //margin: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    img {
      width: 30%;
    }
    div {
      margin: 1rem;
    }
    p {
      //text-align: justify;
      margin: 1rem;
    }
  }
  .line1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    div {
      max-width: 50%;
      display: flex;
      justify-content: flex-end;
    }
  }
  .line2 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .line3 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .line4 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .btsTable {
    margin: 1rem;
    td {
      padding: 1.5rem;
      text-align: justify;
    }
    th {
      padding-left: 3rem;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-right: 2rem;
    margin-left: 1rem;
    .container {
      margin: 0rem;
    }
    .line1 {
      flex-direction: column;
      align-items: center;
    }
    .line3 {
      flex-direction: column;
      align-items: center;
    }
    .line4 {
      flex-direction: column;
      align-items: center;
    }
    .corps {
      img {
        width: 100%;
      }
    }
  }
`;

function Project({ location }) {
  const [projectRef] = useState(
    location.state || JSON.parse(localStorage.getItem('project'))
  );

  const setInLocalStorage = () => {
    if (location.state) {
      localStorage.setItem('project', JSON.stringify(location.state));
    }
  };

  useEffect(setInLocalStorage);

  return (
    <ProjectStyles>
      <div className="container">
        <div className="title">
          <h1>{projectRef.name}</h1>
        </div>
        <div className="description__generale">{projectRef.longDesc}</div>
        <div className="corps">
          <div className="line1">
            <p>{projectRef.text1}</p>
            <SRLWrapper>
              <img src={projectRef.img1} alt="project 1" />
            </SRLWrapper>
          </div>
          <div className="line2">
            <p>{projectRef.text2}</p>
          </div>
          <div className="line3">
            <SRLWrapper>
              <img src={projectRef.img2} alt="project 1" />
            </SRLWrapper>
            <p>{projectRef.text3}</p>
          </div>
        </div>
      </div>
    </ProjectStyles>
  );
}

export default Project;

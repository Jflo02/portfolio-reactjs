import React, { useEffect } from 'react';
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

function Project(props) {
  const [project, getProject, projectRef] = useState(
    // eslint-disable-next-line react/destructuring-assignment
    props.location.state || JSON.parse(localStorage.getItem('project'))
  );
  const [btsSkills, setBtsSkills, btsSkillsRef] = useState(
    projectRef.current.btsSkills
  );

  const setInLocalStorage = () => {
    if (props.location.state) {
      console.log('je met qql chose en réserve !');
      localStorage.setItem('project', JSON.stringify(props.location.state));
    }
  };

  const GetFromLocalStorage = () => {
    console.log('je prend qql chose en réserve !');
    localStorage.setItem('project', JSON.stringify(project));
  };

  const debug = () => {
    console.log(projectRef.current);
  };

  useEffect(setInLocalStorage);

  return (
    <ProjectStyles>
      <div className="container">
        <div className="title">
          {debug()}
          <h1>{projectRef.current.name}</h1>
        </div>
        <div className="description__generale">
          {projectRef.current.longDesc}
        </div>
        <div className="corps">
          <div className="line1">
            <p>{projectRef.current.text1}</p>
            <img src={projectRef.current.img1} alt="project 1" />
          </div>
          <div className="line2">
            <p>{projectRef.current.text2}</p>
          </div>
          <div className="line3">
            <img src={projectRef.current.img2} alt="project 1" />
            <p>{projectRef.current.text3}</p>
          </div>
          <div className="line4">
            <table className="btsTable">
              <thead>
                <tr>
                  <th>Compétences BTS</th>
                  <th>Mission réalisée</th>
                </tr>
              </thead>
              <tbody>
                {btsSkillsRef.current.map((skill) => (
                  <tr>
                    <td>{skill.name}</td>
                    <td>{skill.mission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </ProjectStyles>
  );
}

export default Project;

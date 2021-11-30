import React, { useEffect } from 'react';
import useState from 'react-usestateref';
import styled from 'styled-components';
import image1 from '../assets/images/symfony.png';
import image2 from '../assets/images/cointracker.jpg';

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
    props.location.projectProps || JSON.parse(localStorage.getItem('project'))
  );

  const setInLocalStorage = () => {
    if (props.location.projectProps) {
      console.log('je met qql chose en réserve !');
      localStorage.setItem(
        'project',
        JSON.stringify(props.location.projectProps)
      );
    }
  };

  const GetFromLocalStorage = () => {
    console.log('je prend qql chose en réserve !');
    localStorage.setItem('project', JSON.stringify(project));
  };

  useEffect(setInLocalStorage);
  return (
    <ProjectStyles>
      <div className="container">
        <div className="title">
          <h1>{projectRef.current.project.name}</h1>
        </div>
        <div className="description__generale">
          {projectRef.current.project.longDesc}
        </div>
        <div className="corps">
          <div className="line1">
            <p>{projectRef.current.project.text1}</p>
            <img src={projectRef.current.project.img1} alt="project 1" />
          </div>
          <div className="line2">
            <p>{projectRef.current.project.text2}</p>
          </div>
          <div className="line3">
            <img src={projectRef.current.project.img2} alt="project 1" />
            <p>{projectRef.current.project.text3}</p>
          </div>
        </div>
      </div>
    </ProjectStyles>
  );
}

export default Project;

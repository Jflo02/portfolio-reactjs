import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
  const [certificationRef] = useState(
    location.state || JSON.parse(localStorage.getItem('certification'))
  );

  const setInLocalStorage = () => {
    if (location.state) {
      localStorage.setItem('certification', JSON.stringify(location.state));
    }
  };

  useEffect(setInLocalStorage);

  return (
    <ProjectStyles>
      <div className="container">
        <div className="title">
          <h1>{certificationRef.name}</h1>
        </div>
        <div className="description__generale">{certificationRef.longDesc}</div>
        <div className="corps">
          <div className="line1">
            <p>{certificationRef.text1}</p>
            <Link
              to={{
                pathname: '/image',
                state: {
                  img: certificationRef.img1,
                },
              }}
              key="lalal"
            >
              <img src={certificationRef.img1} alt="project 1" />
            </Link>
          </div>
        </div>
      </div>
    </ProjectStyles>
  );
}

export default Project;

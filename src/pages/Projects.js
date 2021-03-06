import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/all';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const ProjectsStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border: 6px;
    outline: none;
    border: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .project__searchBar,
    .project__searchBar form,
    .project__searchBar input {
      width: 100%;
    }
  }
`;

function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value > 0) {
      setProjectData(ProjectInfo);
    }
  }
  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle heading="Projets" subheading="Mes" />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Projet"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <Link
              to={{
                pathname: '/project',
                state: item,
              }}
              key={`project${item.id}`}
            >
              <ProjectItem
                key={item.id}
                title={item.name}
                img={item.img}
                desc={item.desc}
              />
            </Link>
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}

export default Projects;

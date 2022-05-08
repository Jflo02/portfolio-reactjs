import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/all';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import CertificationInfo from '../assets/data/certifications';

const CertificationsStyles = styled.div`
  padding: 10rem 0;
  .certifications__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .certifications__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .certifications__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border: 6px;
    outline: none;
    border: none;
  }
  .certifications__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .certifications__searchBar .searchIcon path {
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

function Certifications() {
  const [searchText, setSearchText] = useState('');
  const [certificationData, setCertificationData] = useState(CertificationInfo);

  useEffect(() => {
    if (searchText === '') return;
    setCertificationData(() =>
      CertificationInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  function handleChange(e) {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value > 0) {
      setCertificationData(CertificationInfo);
    }
  }
  return (
    <CertificationsStyles>
      <div className="container">
        <SectionTitle heading="certifications" subheading="Mes" />
        <div className="certifications__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Certification"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="certifications__allItems">
          {certificationData.map((item) => (
            <Link
              to={{
                pathname: '/certification',
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
    </CertificationsStyles>
  );
}

export default Certifications;

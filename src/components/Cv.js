import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import cvPNG from '../assets/images/florimond_jaulin_cv.png';

const CvStyle = styled.div`
  padding: 10rem 0;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;
function Cv() {
  return (
    <CvStyle>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.dropbox.com/s/1etsupztwvduoua/florimond_jaulin_cv.pdf?dl=0https://www.dropbox.com/s/1etsupztwvduoua/florimond_jaulin_cv.pdf?dl=0"
      >
        <img src={cvPNG} alt="cv florimond" />
      </a>
    </CvStyle>
  );
}

export default Cv;

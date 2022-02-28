import React from 'react';
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
      <img src={cvPNG} alt="cv florimond" />
    </CvStyle>
  );
  // return <div>THis is an image</div>;
}

export default Cv;

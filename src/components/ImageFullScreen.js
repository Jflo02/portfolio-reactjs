import React from 'react';
import styled from 'styled-components';

const ImageFullScreenStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
`;
function ImageFullScreen({ location }) {
  return (
    <ImageFullScreenStyle>
      <div className="container">
        <img src={location.state.img} alt="competences bts" width="100px" />
      </div>
    </ImageFullScreenStyle>
  );
}

export default ImageFullScreen;

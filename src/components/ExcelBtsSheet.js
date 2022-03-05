import React from 'react';
import styled from 'styled-components';
import excelCompetences from '../assets/images/excel-competences.png';

const ExcelBtsSheetStyle = styled.div`
  padding: 10rem 0;
`;
function ExcelBtsSheet() {
  return (
    <ExcelBtsSheetStyle>
      <img src={excelCompetences} alt="competences bts" width="100px" />
    </ExcelBtsSheetStyle>
  );
  // return <div>THis is an image</div>;
}

export default ExcelBtsSheet;

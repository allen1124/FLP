import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Dream from "../dreams/Dream.js"

const DreamsPanel = (props) => {

  return (
    <Container style={{position: "relative"}}>
      <Dream type="CAR" id="CAR1" top={0} left={0}/>
      <Dream type="HOUSE" id="HOUSE" top={0} left={70}/>
      <Dream type="BABY" id="BABY" top={0} left={140}/>
      <Dream type="HOSP" id="HOSP" top={0} left={210}/>
      <Dream type="EDU" id="EDU" top={0} left={280}/>
      <Dream type="EDU" id="EDU1" top={0} left={350}/>
    </Container>
  );
}

export default DreamsPanel;

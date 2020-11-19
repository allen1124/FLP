import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import Dream from "../dreams/Dream.js"

const DreamsPanel = (props) => {
  return (
    <Container>
      <Row>
        <Col xs="2">
          <Dream type="CAR" id="CAR"/>
        </Col>
        <Col xs="2">
          <Dream type="HOUSE" id="HOUSE"/>
        </Col>
        <Col xs="2">
          <Dream type="BABY" id="BABY"/>
        </Col>
        <Col xs="2">
          <Dream type="HOSP" id="HOSP"/>
        </Col>
        <Col xs="2">
          <Dream type="EDU" id="EDU"/>
        </Col>
      </Row>
    </Container>
  );
}

export default DreamsPanel;

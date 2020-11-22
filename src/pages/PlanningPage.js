import React, { useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import DreamsPanel from "../components/dreamsPanel/DreamsPanel";
import PlanningChart from "../components/planningChart/PlanningChart.js";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const PlanningPage = () => {

  return (
    <Container fluid={true} style={{marginTop: 32, position: "absolute"}}>
      <Row style={{position: "relative"}}>
        <DndProvider backend={HTML5Backend}>
          <Col xs={12} md={8} id="chart-wrapper" style={{height:500}}>
            <PlanningChart />
          </Col>
          <Col xs={0} md={4} id="dream-board-wrapper">
            <DreamsPanel/>
          </Col>
        </DndProvider>
      </Row>
    </Container>
  );
};

export default PlanningPage;
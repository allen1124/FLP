import React, { useState, useEffect, useRef } from 'react';
import {Container, Carousel} from 'react-bootstrap'
import Dream from "../dreams/Dream.js"
import Slider from "react-slick";

const DreamsPanel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Container style={{position: "relative", height: 56, width:397}}>
        <Dream type="CAR" id="CAR" top={0} left={0}/>
        <Dream type="HOUSE" id="HOUSE" top={0} left={70}/>
        <Dream type="BABY" id="BABY" top={0} left={140}/>
        <Dream type="HOSP" id="HOSP" top={0} left={210}/>
        <Dream type="EDU" id="EDU" top={0} left={280}/>
        <Dream type="WEDDING" id="WEDDING" top={0} left={350}/>
      </Container>
      <Carousel activeIndex={index} onSelect={handleSelect} style={{background: "grey",height: 320}}>
        <Carousel.Item style={{background:"black"}}>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DreamsPanel;

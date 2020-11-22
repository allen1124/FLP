import React, { useState, useEffect, useRef } from 'react';
import {Container, Carousel, Card, Button} from 'react-bootstrap'
import Dream from "../dreams/Dream.js"
import Slider from "react-slick";

const DreamsPanel = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const selectDream = (selectedIndex) => {
    console.log("SELECT DREAM ", selectedIndex);
    if(selectedIndex != index)
      setIndex(selectedIndex);
  };

  return (
    <div>
      <Container style={{position: "relative", height: 56, width:397}}>
        <Dream type="CAR" id="CAR" top={0} left={0} click={()=>{selectDream(0)}}/>
        <Dream type="HOUSE" id="HOUSE" top={0} left={70} click={()=>{selectDream(1)}}/>
        <Dream type="BABY" id="BABY" top={0} left={140} click={()=>{selectDream(2)}}/>
        <Dream type="HOSP" id="HOSP" top={0} left={210} click={()=>{selectDream(3)}}/>
        <Dream type="EDU" id="EDU" top={0} left={280} click={()=>{selectDream(4)}}/>
        <Dream type="WEDDING" id="WEDDING" top={0} left={350} click={()=>{selectDream(5)}}/>
      </Container>
      <Carousel activeIndex={index} keyboard={false} onSelect={handleSelect} style={{height: 400}}>
        <Carousel.Item key="CAR">
          <Card style={{ width: '80%', margin: "auto"}}>
            <Card.Img variant="top" src="/car.jpg" />
            <Card.Body>
              <Card.Title>Vehicle Purchase</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item key="HOUSE">
          <Card style={{ width: '80%', margin: "auto"}}>
            <Card.Img variant="top" src="/house.jpg" />
            <Card.Body>
              <Card.Title>Property Mortgage</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item key="BABY">
          <Card style={{ width: '80%', margin: "auto"}}>
            <Card.Img variant="top" src="/baby.jpg" />
            <Card.Body>
              <Card.Title>Family Planning</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item key="HOSP">
          <Card style={{ width: '80%', margin: "auto"}}>
            <Card.Img variant="top" src="/hosp.jpg" />
            <Card.Body>
              <Card.Title>Medical Expenses</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item key="EDU">
          <Card style={{ width: '80%', margin: "auto"}}>
            <Card.Img variant="top" src="/edu.jpg" />
            <Card.Body>
              <Card.Title>Education</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item key="WEDDING">
          <Card style={{ width: '80%', margin: "auto"}}>
            <Card.Img variant="top" src="/wedding.jpg" />
            <Card.Body>
              <Card.Title>Marriage</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DreamsPanel;

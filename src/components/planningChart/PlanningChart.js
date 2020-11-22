import React, { useState, useEffect, useRef } from 'react';
import Chartjs from 'chart.js';
import {Container} from 'react-bootstrap';
import Dream from '../dreams/Dream.js';
import { useDrop } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';
import update from 'immutability-helper';

const chartConfig = (ctx) => {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(1, "rgba(128, 255, 251, 0)");
  gradient.addColorStop(0, "rgba(128, 255, 251, 1)");
  return({
    type: 'line',
    data: {
      labels: ["22", "23", "24", "25", "26",
      "27", "28", "29", "30", "31",
      "32", "33"],
      datasets: [{
        label: "Expected value",
        data: [{x: "22", y: 140}, {x: "23", y: 145},
          {x: "24", y: 150}, {x: "25", y: 160},
          {x: "26", y: 180}, {x: "27", y: 200},
          {x: "28", y: 215}, {x: "29", y: 220},
          {x: "30", y: 230}, {x: "31", y: 220},
          {x: "32", y: 200}, {x: "33", y: 240}],
        backgroundColor: "transparent",
        type: 'line',
        borderColor: 'rgb(230, 48, 48)',
        borderWidth: 3,
        pointBorderColor: 'rgb(255, 255, 255)',
        pointBackgroundColor: 'rgb(217, 111, 111)',
        pointHoverBackgroundColor: 'rgb(217, 111, 111)',
        pointHoverBorderColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 2,
        pointHoverRadius: 10,
        pointHoverBorderWidth: 1,
        pointRadius: 5,
      }]
    },
    options: {
      responsive: true,
      legend: {
        display: false
      },
      hover: {
        mode: 'index'
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Age'
          },
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: 'Value'
          },
          gridLines: {
            display: false
          }
        }]
      }
    }
  });
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomData = (oldData) => {
  return oldData.map((xy) => {
    return ({
      x: xy.x,
      y: xy.y+getRandomInt(-20, 20)
    });
  });
}
const PlanningChart = ({hideSourceOnDrag}) => {
  const [dreams, setDreams] = useState({});
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const [{isOver}, drop] = useDrop({
		accept: ItemTypes.DREAM,
		drop(item, monitor) {
      let left, top, delta;
      console.log(chartInstance);
      if(item.top == 0){
        delta = monitor.getDifferenceFromInitialOffset();
        console.log("delta", delta)
        left = Math.round(item.left + delta.x + 840);
        top = Math.round(item.top + delta.y);
        console.log("left, top", left, top);
      }else{
        delta = monitor.getDifferenceFromInitialOffset();
			  left = Math.round(item.left + delta.x);
        top = Math.round(item.top + delta.y);
      }
			moveDream(item.id, left, top, item.type)
			return undefined
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver()
    })
  })

  const moveDream = (id, left, top, type) => {
		setDreams({
			...dreams,
			[id]: { left, top, type }
    });
    updateDataset(0, randomData(chartInstance.data.datasets[0].data));
	}
  useEffect(() => {
    const ctx = document.getElementById("planningChart").getContext("2d");
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig(ctx));
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (datasetIndex, newData) => {
    chartInstance.data.datasets[datasetIndex].data = newData;
    chartInstance.update();
  };

  return(
    <Container style={{position: "relative", height: "inherit"}}>
      <canvas id={"planningChart"} ref={chartContainer} style={{position: "absolute"}} />
      <Container ref={drop} style={{position: "absolute",
        height: chartInstance == null? 350 : chartInstance.chart.height-40}}>
        {Object.keys(dreams).map((key) => {
          const { left, top, type, click } = dreams[key]
          return (
            <Dream
              id={key}
              left={left}
              top={top}
              type={type}
              hideSourceOnDrag={hideSourceOnDrag}
              click={click}
            >
            </Dream>
          )
        })}
      </Container>
    </Container>
  )
}

export default PlanningChart;
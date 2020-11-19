import React, { Component, useState, useEffect, useRef } from 'react';
import Chartjs from 'chart.js';
import Dream from '../dreams/Dream.js';
import { XYCoord, useDrop } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';
import update from 'immutability-helper';

// export interface ContainerProps {
// 	hideSourceOnDrag: boolean
// }

// export interface ContainerState {
// 	dreams: { [id: string]: { top: number; left: number; } }
// }
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
// interface DragItem {
//   type: string
// 	id: string
// 	top: number
// 	left: number
// }
const PlanningChart = ({hideSourceOnDrag}) => {
  const [dreams, setDreams] = useState({
		"CAR": { top: 20, left: 80 }
	});
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  const [, drop] = useDrop({
		accept: ItemTypes.DREAM,
		drop(item, monitor) {
			const delta = monitor.getDifferenceFromInitialOffset()
			const left = Math.round(item.left + delta.x)
			const top = Math.round(item.top + delta.y)
			moveDream(item.id, left, top)
			return undefined
		},
	})


  const moveDream = (id, left, top) => {
		setDreams(
			update(dreams, {
				[id]: {
					$merge: { left, top },
				},
			}),
		)
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
    <div>
      <canvas id={"planningChart"} ref={chartContainer} />
      <div ref={drop}>
        {Object.keys(dreams).map((key) => {
          const { left, top } = dreams[key]
          return (
            <Dream
              id={key}
              left={left}
              top={top}
              type={key}
              hideSourceOnDrag={hideSourceOnDrag}
            >
            </Dream>
          )
        })}
      </div>
    </div>
  )
}

export default PlanningChart;
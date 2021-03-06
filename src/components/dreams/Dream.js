import React from 'react';
import styled from 'styled-components';
import { AiFillCar } from 'react-icons/ai';
import { BsHouseFill } from 'react-icons/bs';
import { FaBaby, FaHospital, FaSchool } from 'react-icons/fa';
import { GiDiamondRing } from 'react-icons/gi';
import { IconContext } from "react-icons";
import { DragSource } from 'react-dnd';
import ItemTypes from '../../utils/ItemTypes';

const Button = styled.button`
  height: 45px;
  width: 45px;
  background: #D86147;
  color: white;
  border: 0px;
  text-align:center;
  border-radius: 50%;
  font-size: 16px;
  justify-content: center;
  display:block;
  outline: none;
`;

const Dream = ({
  type,
  id,
  hideSourceOnDrag,
	left,
	top,
	connectDragSource,
  isDragging,
  click
}) => {
  if (isDragging && hideSourceOnDrag) {
		return null;
	}
  var icon;
  if(type == "CAR")
    icon = <AiFillCar />;
  if(type == "HOUSE")
    icon = <BsHouseFill />;
  if(type == "BABY")
    icon = <FaBaby />;
  if(type == "HOSP")
    icon = <FaHospital />;
  if(type == "EDU")
    icon = <FaSchool />;
  if(type == "WEDDING")
    icon = <GiDiamondRing />;
  return connectDragSource(
    <div style={{position:"absolute", width:"min-content", left, top}}>
      <Button id={id} style={{opacity: isDragging? 0.5:1}} onClick={click}>
        <IconContext.Provider
          value={{ color: 'white', size: '25px' , display: 'inline-block' }}>
          {icon}
        </IconContext.Provider>
      </Button>
    </div>
  );
}

export default DragSource(
	ItemTypes.DREAM,
	{
		beginDrag({ id, left, top, type, click }) {
			return { id, left, top, type, click }
		},
	},
	(connect, monitor) => ({
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging(),
	}),
)(Dream)
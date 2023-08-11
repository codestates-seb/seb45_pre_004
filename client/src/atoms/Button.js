import React from "react";
import styled from "styled-components";
import tokens from "../styles/tokens.json";
import { Link } from 'react-router-dom';
//props : color, fontColor
export const RegularButtonDesign = styled.button`
  width: 350px;
  height: 70px;
  border-radius: ${tokens.global.regularRadius.value}px;
  border: 0;
  font-size: ${tokens.global.smallHeading.value}px;
  font-weight: ${tokens.global.bold.value};
  color: ${(props)=>props.fontColor?props.fontColor:'white'};
  box-shadow: ${tokens.global.regularShadow.value.x}px
    ${tokens.global.regularShadow.value.y}px
    ${tokens.global.regularShadow.value.blur}px
    ${tokens.global.regularShadow.value.spread}px
    ${tokens.global.regularShadow.value.color};
  background: ${(props) => props.color || `${tokens.global.mainColor.value}`};
  transition: 300ms;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.hover || `${tokens.global.dartColor.value}`};
	}
`;
//props : color, fontColor
export const SmallCircleButtonDesign = styled(RegularButtonDesign)`
	border-radius: 50%;
	width: 70px;
	height: 70px;
	font-size: ${tokens.global.bodyText.value}px;
	&:hover {
		cursor: pointer;
		background-color: ${tokens.global.dartColor.value};
		color: ${tokens.global.whiteColor.value};
	}
`;

export const SmallButtonDesign = styled.button`
	border-radius: ${tokens.global.regularRadius.value}px;
	width: 90px;
	height: 30px;
	font-size: ${tokens.global.bodyText.value}px;
	font-weight: ${tokens.global.bold.value};
	border: 0;
	color: ${(props)=>props.fontColor?props.fontColor:'white'};
	box-shadow: ${tokens.global.regularShadow.value.x}px
		${tokens.global.regularShadow.value.y}px
		${tokens.global.regularShadow.value.blur}px
		${tokens.global.regularShadow.value.spread}px
		${tokens.global.regularShadow.value.color};
	background: ${(props) => props.color || `${tokens.global.mainColor.value}`};
	transition: 300ms;
	&:hover {
		cursor: pointer;
		background-color: ${(props) =>props.hover || `${tokens.global.dartColor.value}`};
		color: ${(props)=>props.hoverFontColor||'white'};
	}
`;

export const TextButtonDesign = styled(Link)`
	background-color: transparent;
	border-style: none;
	text-decoration: none;
	color: ${tokens.global.blackColor.value};
	padding: 10px 20px;
	font-size: ${tokens.global.bodyText}px;
	cursor: pointer;

	&:hover{
		color: ${tokens.global.lightGreyColor.value};
		transition: 300ms;
	}

	&:not(:hover) {
		transition: 300ms ease-out;
	}
`

export const ColorGradBlue = styled.p`
	background: linear-gradient(to right top, #00e0ff, #006c7a);
	color: transparent;
	-webkit-background-clip: text;
	background-clip: text;
	color: ${tokens.global.pointColor.value};
`;

const Button = ({ color, text, fontColor }) => {
	return (
		<div>
			<RegularButtonDesign color={color} fontColor={fontColor}>
				{text}
			</RegularButtonDesign>
			<SmallCircleButtonDesign color={color} fontColor={fontColor}>
				{text}
			</SmallCircleButtonDesign>
			<SmallButtonDesign color={color} fontColor={fontColor}>
				{text}
			</SmallButtonDesign>
			<TextButtonDesign>{text}</TextButtonDesign>
		</div>
	);
};

export default Button;

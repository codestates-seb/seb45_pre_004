import React from "react";
import styled from "styled-components";
import tokens from "../styles/tokens.json";
import { Link } from 'react-router-dom';

export const RegularButtonDesign = styled.button`
  border-radius: ${tokens.global.regularRadius.value}px;
  border: 0;
  font-size: ${tokens.global.smallHeading.value}px;
  font-weight: ${tokens.global.bold.value};
  color: ${tokens.global.whiteColor.value};
  box-shadow: ${tokens.global.regularShadow.value.x}px
    ${tokens.global.regularShadow.value.y}px
    ${tokens.global.regularShadow.value.blur}px
    ${tokens.global.regularShadow.value.spread}px
    ${tokens.global.regularShadow.value.color};
  background: ${(props) => props.color || `${tokens.global.mainColor.value}`};
  width: 350px;
  height: 70px;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.hover || `${tokens.global.dartColor.value}`};
	}
	transition: 300ms;
`;

export const SmallCircleButtonDesign = styled(RegularButtonDesign)`
	border-radius: 50%;
	width: 80px;
	height: 80px;
`;

export const SmallButtonDesign = styled(RegularButtonDesign)`
	border-radius: ${tokens.global.regularRadius.value}px;
	width: 120px;
	height: 40px;
	font-size: ${tokens.global.smallHeading.value}px;
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
	color: black;
`;

const Button = ({ color, text }) => {
	return (
		<div>
			<RegularButtonDesign color={color}>
				<ColorGradBlue>{text}</ColorGradBlue>
			</RegularButtonDesign>
			<SmallCircleButtonDesign>
				<ColorGradBlue>{text}</ColorGradBlue>
			</SmallCircleButtonDesign>
			<SmallButtonDesign>
				<ColorGradBlue>{text}</ColorGradBlue>
			</SmallButtonDesign>
			<TextButtonDesign>{text}</TextButtonDesign>
		</div>
	);
};

export default Button;

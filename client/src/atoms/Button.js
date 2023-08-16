import React from "react";
import styled from "styled-components";
import tokens from "../styles/tokens.json";
import { Link } from 'react-router-dom';

const globalTokens = tokens.global;
//props : color, fontColor
export const RegularButtonDesign = styled.button`
  width: 300px;
  height: 70px;
  border-radius: ${globalTokens.regularRadius.value}px;
  border: 0;
  font-size: ${globalTokens.smallHeading.value}px;
  font-weight: ${globalTokens.bold.value};
  color: ${(props)=>props.fontColor?props.fontColor:'white'};
  box-shadow: ${globalTokens.regularShadow.value.x}px
    ${globalTokens.regularShadow.value.y}px
    ${globalTokens.regularShadow.value.blur}px
    ${globalTokens.regularShadow.value.spread}px
    ${globalTokens.regularShadow.value.color};
  background: ${(props) => props.color || `${globalTokens.mainColor.value}`};
  transition: 300ms;
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.hover || `${globalTokens.darkColor.value}`};
	}
`;
//props : color, fontColor
export const SmallCircleButtonDesign = styled(RegularButtonDesign)`
	border-radius: 50%;
	width: 60px;
	height: 60px;
	font-size: ${globalTokens.bodyText.value}px;
	&:hover {
		cursor: pointer;
		background-color: ${globalTokens.darkColor.value};
		color: ${globalTokens.whiteColor.value};
	}
`;

export const SmallButtonDesign = styled.button`
	border-radius: ${globalTokens.regularRadius.value}px;
	width: 90px;
	height: 30px;
	font-size: ${globalTokens.bodyText.value}px;
	font-weight: ${globalTokens.bold.value};
	border: 0;
	color: ${(props)=>props.fontColor?props.fontColor:'white'};
	box-shadow: ${globalTokens.regularShadow.value.x}px
		${globalTokens.regularShadow.value.y}px
		${globalTokens.regularShadow.value.blur}px
		${globalTokens.regularShadow.value.spread}px
		${globalTokens.regularShadow.value.color};
	background: ${(props) => props.color || `${globalTokens.mainColor.value}`};
	transition: 300ms;
	&:hover {
		cursor: pointer;
		background-color: ${(props) =>props.hover || `${globalTokens.darkColor.value}`};
		color: ${(props)=>props.hoverFontColor||'white'};
	}
`;

export const SmallLinkButtonDesign = styled(Link)`
	border-radius: ${globalTokens.regularRadius.value}px;
	width: 90px;
	height: 30px;
	font-size: ${globalTokens.bodyText.value}px;
	font-weight: ${globalTokens.bold.value};
	border: 0;
	color: ${(props)=>props.fontColor?props.fontColor:'white'};
	box-shadow: ${globalTokens.regularShadow.value.x}px
		${globalTokens.regularShadow.value.y}px
		${globalTokens.regularShadow.value.blur}px
		${globalTokens.regularShadow.value.spread}px
		${globalTokens.regularShadow.value.color};
	background: ${(props) => props.color || `${globalTokens.mainColor.value}`};
	transition: 300ms;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&:hover {
		cursor: pointer;
		background-color: ${(props) =>props.hover || `${globalTokens.darkColor.value}`};
		color: ${(props)=>props.hoverFontColor||'white'};
	}
`;

export const TextButtonDesign = styled(Link)`
	background-color: transparent;
	border-style: none;
	text-decoration: none;
	color: ${globalTokens.blackColor.value};
	padding: 10px 20px;
	font-size: ${globalTokens.bodyText}px;
	cursor: pointer;

	&:hover{
		color: ${globalTokens.lightGreyColor.value};
		transition: 300ms;
	}

	&:not(:hover) {
		transition: 300ms ease-out;
	}
`

export const PaginationButtonDesign = styled.button`
	border: ${globalTokens.regularWidth.value}px solid ${globalTokens.lightGreyColor.value};
	border-radius: ${globalTokens.smallRadius.value}px;
	padding: 0px 10px;
	height: 30px;
	color: ${globalTokens.blackColor.value};
	font-size: ${globalTokens.bodyText.value}px;
	transition: 300ms;
	background-color: ${globalTokens.whiteColor.value};
	cursor: pointer;

	&:hover {
		color: ${globalTokens.whiteColor.value};
		background-color: ${globalTokens.pointColor.value};
	}
`

const Button = ({ color, text, fontColor }) => {
	return (
		<div style={{display: "grid", gridTemplateColumns: '1fr 1fr 1fr', gridAutoRows: '1fr', placeItems: 'center' }}>
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
			<PaginationButtonDesign>1</PaginationButtonDesign>
			<PaginationButtonDesign>110</PaginationButtonDesign>
			<PaginationButtonDesign>▶️</PaginationButtonDesign>
		</div>
	);
};

export default Button;

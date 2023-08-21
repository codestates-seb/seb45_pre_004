import { styled } from "styled-components";
import { SmallButtonDesign, SmallLinkButtonDesign } from "../atoms/Button";

import tokens from "./tokens.json";
import { Link } from "react-router-dom";
const globalTokens = tokens.global;

export const MainPageContainer = styled.div`
	width: 100%;
	height: auto;
	min-height: 100%;
	padding-bottom: 107px;

	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 100px;
`;
export const MainSmallNavigator = styled.section`
	width: 90%;
	height: 80px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const AskButton = styled(SmallButtonDesign)`
	color: ${globalTokens.darkColor
		.value};
	background-color: ${globalTokens.whiteColor.value};
	margin-right: 35px;
`;

export const QLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0px 10%;
`;

export const LoadingContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100px;
`
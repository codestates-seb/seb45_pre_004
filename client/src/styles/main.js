import { styled } from "styled-components";
import { SmallLinkButtonDesign } from "../atoms/Button";

import tokens from "./tokens.json";
const globalTokens = tokens.global;

export const MainPageContainer = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
`;
export const MainSmallNavigator = styled.section`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: end;
`;

export const AskButton = styled(SmallLinkButtonDesign)`
	color: ${globalTokens.pointColor.value};
	background-color: ${globalTokens.whiteColor.value};
`;

export const QLink = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
`;

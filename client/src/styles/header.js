import { Link } from "react-router-dom";
import { styled } from "styled-components";
import tokens from "../styles/tokens.json";

const globalTokens = tokens.global;

export const Background = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

export const Wrapper = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	width: 90%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) =>
		props.isLoginPage
			? "transparent"
			: "	background: rgba(255, 255, 255, 0.5);"};
	border-radius: 20px;

	position: relative;
	margin-top: 10px;
	padding: 10px 0px;
`;

export const LogoLink = styled(Link)`
	text-decoration: none;
	color: ${globalTokens.blackColor.value};
`;
export const LogoImg = styled.img`
	margin-top: 10px;
	max-width: 70px;
`;
export const Title = styled.h1`
	font-family: "Jolly Lodger";
	font-size: 32px;
	color: #0567c2;
`;

export const Buttons = styled.section`
	position: absolute;
	right: 0;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 0px 40px;
`;

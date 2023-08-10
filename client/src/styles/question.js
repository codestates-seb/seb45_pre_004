import { styled } from "styled-components";
import tokens from "../styles/tokens.json";

const globalTokens = tokens.global;

export const Wrapper = styled.li`
	display: flex;
	flex-direction: row;
	align-items: baseline;
	width: 90%;
	padding: 20px 10px;
    margin: 15px;
	border-radius: 10px;
	background: #fff;
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
	font-weight: 700;
	color: ${globalTokens.greyColor.value};
`;
export const Current = styled.aside`
	display: flex;
	width: 10%;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	gap: 10px;
	padding-right: 10px;
`;
export const Container = styled.article`
	width: 90%;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	padding: 10px 0px;
	gap: 10px;
	flex-shrink: 0;
	h1 {
        font-size: 20px;
		color: ${globalTokens.blackColor.value};
	}
`;
export const Contents = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 7px;
`;

export const Info = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: end;
	gap: 5px;
	margin-top: 20px;
	width: 100%;
	color: ${globalTokens.lightGreyColor.value};
	section {
		gap: 5px;
	}
	span {
		color: ${globalTokens.blackColor.value};
	}
`;

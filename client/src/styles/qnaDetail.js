import { styled } from "styled-components";
import tokens from "../styles/tokens.json";

const globalTokens = tokens.global;

export const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;

	position: relative;
	margin-top: 20px;

	font-weight: 700;
	color: ${globalTokens.blackColor.value};
`;

export const Thread = styled.hr`
	position: absolute;
	left: 20%;
	top: 0;
	border: 2px solid #c8d5dc;
	width: 1;

	height: 100%;

	z-index: -1;
`;

export const Card = styled.section`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 20px;

	padding: 30px;
	margin: 20px;
	width: 80%;
	border-radius: 10px;
	background: #fff;
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);

	hr {
		width: 100%;
		height: 1px;
		border: 0;

		background: ${globalTokens.lightGreyColor.value};
	}
`;

export const QHead = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 20px;

	h1 {
		font-size: 20px;
	}
`;

export const Info = styled.div`
	display: flex;
	flex-direction: row;
	gap: 6px;

	span {
		color: ${globalTokens.greyColor.value};
	}

	> div:last-child {
		color: ${globalTokens.blackColor.value};
	}
`;

export const HeadInfo = styled(Info)`
	gap: 10px;
	color: ${globalTokens.greyColor.value};
	font-size: 16px;
`;

export const AHead = styled(QHead)`
	gap: 10px;
`;

export const Contents = styled.p`
	color: #4b616f;
	font-family: Inter;
	font-size: 16px;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
`;

export const User = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 10px;

	padding: 25px 30px;

	border-radius: 10px;
	background: #fff;
	box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.1) inset;

	font-size: 14px;
	color: ${globalTokens.greyColor.value};

	img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 10px;
	}
`;

export const UserInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const UserInfoData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 4px;

	> div:last-child {
		color: ${globalTokens.lightGreyColor.value};
	}
`;

export const AnswerCard = styled(Card)`
	width: 80%;
	overflow: hidden;
`;

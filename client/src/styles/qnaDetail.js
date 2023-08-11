import { styled } from "styled-components";
import tokens from "../styles/tokens.json";
import { RegularButtonDesign } from "../atoms/Button";

const globalTokens = tokens.global;

export const Wrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
	margin-top: 20px;
	font-weight: 700;
	color: ${globalTokens.blackColor.value};

	position: relative;
`;

export const Thread = styled.hr`
	position: absolute;
	left: 20%;
	top: 20%;
	border: 2px solid #c8d5dc;
	width: 1;
	height: 80%;
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

	width: 100%;

	h1 {
		font-size: 20px;
	}
`;

export const InfoWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 20px;

	width: 100%;
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

export const Edit = styled.div`
	display: flex;
	color: ${globalTokens.lightGreyColor.value};
	gap: 10px;

	div {
		cursor: pointer;
	}
`;

export const AHead = styled(QHead)`
	flex-direction: row;
	gap: 10px;
	justify-content: space-between;
	align-items: last baseline;
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

export const SubmitButton = styled(RegularButtonDesign)`
	color: ${globalTokens.whiteColor.value};
	background: ${globalTokens.pointColor.value};
	font-weight: ${globalTokens.semiBold.value};
	font-size: ${globalTokens.smallHeading.value};
	width: 30%;
`;

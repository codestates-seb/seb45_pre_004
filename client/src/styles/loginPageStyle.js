import { styled } from 'styled-components';
import tokens from '../styles/tokens.json'
import { RegularButtonDesign } from '../atoms/Button';

const globalTokens = tokens.global;

export const LoginPageContainer = styled.div`
	width: 100%;
	height: 75vh;
	min-height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const LoginTitle = styled.h1`
	font-size: ${globalTokens.smallHeading.value}px;
	font-weight: ${globalTokens.bold.value};
	margin-bottom: 25px;
`
export const LoginContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${globalTokens.whiteColor.value};
	box-shadow: 0px 2px 10px 4px rgba(0, 0, 0, 0.10);
	border-radius: 20px;
	padding: 25px 45px;
`
export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const WarningSpan = styled.span`
  width: 300px;
  margin-top: 3px;
  color: ${globalTokens.negativeColor.value};
  font-size: ${globalTokens.bodyText.value}px;
  text-align: right;
`;

export const LoginButton = styled(RegularButtonDesign)`
	margin-top: 25px;
`
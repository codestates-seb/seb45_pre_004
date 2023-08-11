import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/actions/authAction";
import { LoginInputBottomDesign, LoginInputTopDesign } from "../atoms/Input";
import tokens from '../styles/tokens.json'
import { TextButtonDesign } from "../atoms/Button";
import { LoginButton, LoginContainer, LoginPageContainer, LoginTitle } from "../styles/loginPageStyle";

const globalTokens = tokens.global;

const LoginPage = () => {
	const dispatch = useDispatch();

	const [ inputId, setInputId ] = useState('');
	const [ inputPassword, setInputPassword ] = useState('');

	const onInputIdChange = (e) => {
		setInputId(e.target.value);
	}

	const onInputPasswordChange = (e) => {
		setInputPassword(e.target.value);
	}

	//로그인 버튼 눌렀을 때 handler
	const onLoginButtonClickHandler = () => {
		//아이디, 비밀번호 유효성 검사
		if( inputId.length<0 || inputPassword<6 ) {
			console.log('올바르지 않은 아이디, 비밀번호 입력값입니다.');
			return;
		}
		// 로그인 API 호출 등 로직 작성 필요
		dispatch(login());
	};

	return (
		<LoginPageContainer>
			<LoginContainer>
				<LoginTitle>로그인</LoginTitle>
				<LoginInputTopDesign type='text' placeholder="아이디를 입력해 주세요." value={inputId} onChange={onInputIdChange}/>
				<LoginInputBottomDesign type='password' placeholder="비밀번호를 입력해 주세요." value={inputPassword} onChange={onInputPasswordChange}/>
				<LoginButton color={globalTokens.pointColor.value} onClick={onLoginButtonClickHandler}>로그인</LoginButton>
				<TextButtonDesign to='/signup'>회원가입</TextButtonDesign>
			</LoginContainer>
		</LoginPageContainer>
	);
};

export default LoginPage;

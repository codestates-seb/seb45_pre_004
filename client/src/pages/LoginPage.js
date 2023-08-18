import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setIsLoginTrue } from "../redux/actions/isLoginAction";
import { LoginInputBottomDesign, LoginInputTopDesign } from "../atoms/Input";
import tokens from '../styles/tokens.json'
import { TextButtonDesign } from "../atoms/Button";
import { LoginButton, LoginContainer, LoginForm, LoginPageContainer, LoginTitle, WarningSpan } from "../styles/loginPageStyle";
import { loginService } from "../services/loginServices";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "../redux/actions/userInfoAction";
const globalTokens = tokens.global;

const LoginPage = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [ inputId, setInputId ] = useState('');
	const [ inputPassword, setInputPassword ] = useState('');
	const [ warningText, setWarningText ] = useState('');

	const onInputIdChange = (e) => {
		setInputId(e.target.value);
	}
	const onInputPasswordChange = (e) => {
		setInputPassword(e.target.value);
	}
	//로그인 버튼 눌렀을 때 handler
	const onSubmitHandler = (e) => {
		e.preventDefault();
		
		//유효성 검사 문구 출력 로직
		if(inputId.length===0 || inputPassword.length===0) {
			setWarningText('아이디, 비밀번호를 모두 입력해 주세요.');
			return;
		} else if(inputPassword.length<6) {
			setWarningText('비밀번호는 6자 이상이어야 합니다.');
			return;
		} else {
			setWarningText('');
			try{
				loginService({id:inputId, password:inputPassword}).then((res)=>{
					dispatch(setIsLoginTrue());
					dispatch(setUserInfo(res,inputId,''));
					navigate('/');
				})
			} catch( err ) {
				console.log(err);
			}
		}
	};

	return (
		<LoginPageContainer>
			<LoginContainer>
				<LoginTitle>로그인</LoginTitle>
				<LoginForm onSubmit={onSubmitHandler}>
					<LoginInputTopDesign type='text' placeholder="아이디를 입력해 주세요." value={inputId} onChange={onInputIdChange}/>
					<LoginInputBottomDesign type='password' placeholder="비밀번호를 입력해 주세요." value={inputPassword} onChange={onInputPasswordChange}/>
					<WarningSpan> { warningText } </WarningSpan>
					<LoginButton type='submit' color={globalTokens.pointColor.value}>로그인</LoginButton>
					<TextButtonDesign to='/signup'>회원가입</TextButtonDesign>
				</LoginForm>
			</LoginContainer>
		</LoginPageContainer>
	);
};

export default LoginPage;

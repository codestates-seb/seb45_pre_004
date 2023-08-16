import React, { useState } from "react";
import { SignUpPageContainer, SignUpContainer, Input, InputAndLabelBox, InputLabel, SignUpButton, WarningSpan, SignupHeading } from "../styles/signupPageStyle";
import tokens from '../styles/tokens.json'
import { axios } from 'axios';

const SignupPage = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nameWarningText, setNameWarningText] = useState("");
  const [idWarningText, setIdWarningText] = useState("");
  const [passwordWarningText, setPasswordWarningText] = useState("");
  const [passwordCheckWarningText, setPasswordCheckWarningText] = useState("");

  const onChangeNameHandler = (e) => {
    let nameInput = e.target.value;
    setNameWarningText('');
    setName(nameInput);
  };
  const onChangeIdHandler = (e) => {
    let idInput = e.target.value;
    //아이디 중복 검사 로직
    if(idInput==='hyerim') {
      setIdWarningText('이미 사용중인 아이디입니다!');
    } else {
      setIdWarningText('');
    }
    setId(e.target.value);
  };
  const onChangePwdHandler = (e) => {
    let passwordInput = e.target.value;
    //비밀번호 유효성 검사 로직
    console.log(passwordInput);
    console.log(passwordInput.length);
    if(passwordInput.length>0 && passwordInput.length<6){
      setPasswordWarningText('비밀번호는 6자 이상이어야 합니다!')
    } else if (passwordInput.length===0){
      setPasswordWarningText('');
    } else {
      setPasswordWarningText('');
    }
    setPassword(e.target.value);
  };
  const onChangePwdCheckHandler = (e) => {
    const passwordCheckInput = e.target.value;

    if(password===passwordCheckInput) {
      setPasswordCheckWarningText('');
    } else if (passwordCheckInput.length===0) {
      setPasswordCheckWarningText('');
    } else {
      setPasswordCheckWarningText('비밀번호와 비밀번호 확인이 일치하지 않습니다!')
    }

    setPasswordCheck(passwordCheckInput);
  };
  const onSignupButtonClickHandler = (e) => {
    if(!name) setNameWarningText('이름을 입력해 주세요!');
    if(!id) setIdWarningText('아이디를 입력해 주세요!');
    if(!password) setPasswordWarningText('비밀번호를 입력해 주세요!');
    if(!passwordCheck) setPasswordCheckWarningText('비밀번호 확인을 입력해 주세요!');
    if( !nameWarningText && !idWarningText && !passwordWarningText && !passwordCheckWarningText) {
      console.log('가입 성공');
      //가입 성공 로직 작성
    }
  }

  return (
    <SignUpPageContainer>
      <SignUpContainer>
        <SignupHeading>회원가입</SignupHeading>
          <InputAndLabelBox>
            <InputLabel>이름</InputLabel>
            <Input
              placeholder="이름을 입력해주세요"
              value={name}
              onChange={onChangeNameHandler}
            />
            <WarningSpan>{nameWarningText}</WarningSpan>
          </InputAndLabelBox>
          <InputAndLabelBox>
            <InputLabel>아이디</InputLabel>
            <Input
              placeholder="아이디를 입력해 주세요."
              value={id}
              onChange={onChangeIdHandler}
            />
            <WarningSpan>{idWarningText}</WarningSpan>
          </InputAndLabelBox>
          <InputAndLabelBox>
            <InputLabel>비밀번호</InputLabel>
            <Input
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              value={password}
              onChange={onChangePwdHandler}
            />
            <WarningSpan>{passwordWarningText}</WarningSpan>
          </InputAndLabelBox>
          <InputAndLabelBox>
            <InputLabel>비밀번호 확인</InputLabel>
            <Input
              type="password"
              placeholder="비밀번호를 다시 입력해주세요."
              value={passwordCheck}
              onChange={onChangePwdCheckHandler}
            />
            <WarningSpan>{passwordCheckWarningText}</WarningSpan>
          </InputAndLabelBox>
          <SignUpButton 
            color={tokens.global.pointColor.value}
            onClick={onSignupButtonClickHandler}>가입하기</SignUpButton>
      </SignUpContainer>
    </SignUpPageContainer>
  );
};

export default SignupPage;

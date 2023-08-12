import React, { useState } from "react";
import { SignUpPageContainer, SignUpContainer, Input, InputAndLabelBox, InputLabel, SignUpButton, WarningSpan, SignupHeading } from "../styles/signupPageStyle";
import tokens from '../styles/tokens.json'

const SignupPage = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onChangeIdHandler = (e) => {
    setId(e.target.value);
    // 이미 사용중인 아이디 감지 로직
  };

  const onChangePwdHandler = (e) => {
    setPwd(e.target.value);
  };

  const onChangePwdCheckHandler = (e) => {
    setPwdCheck(e.target.value);
  };

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
          </InputAndLabelBox>
          <InputAndLabelBox>
            <InputLabel>아이디</InputLabel>
            <Input
              placeholder="아이디를 입력해 주세요."
              value={id}
              onChange={onChangeIdHandler}
            />
            {/*<WarningSpan>이미 사용중인 아이디입니다.</WarningSpan> */}
          </InputAndLabelBox>
          <InputAndLabelBox>
            <InputLabel>비밀번호</InputLabel>
            <Input
              placeholder="비밀번호를 입력해 주세요."
              value={pwd}
              onChange={onChangePwdHandler}
              type="password"
            />
            { pwd.length < 6 ? (
              <WarningSpan>비밀번호는 6자 이상이어야 합니다.</WarningSpan>
            ) : null }
          </InputAndLabelBox>
          <InputAndLabelBox>
            <InputLabel>비밀번호 확인</InputLabel>
            <Input
              placeholder="비밀번호를 다시 입력해주세요."
              value={pwdCheck}
              onChange={onChangePwdCheckHandler}
              type="password"
            />
            {pwd !== pwdCheck ? (
              <WarningSpan>
                비밀번호와 비밀번호 확인이 일치하지 않습니다.
              </WarningSpan>
            ) : (
              <></>
            )}
          </InputAndLabelBox>
          <SignUpButton color={tokens.global.pointColor.value}>가입하기</SignUpButton>
      </SignUpContainer>
    </SignUpPageContainer>
  );
};

export default SignupPage;

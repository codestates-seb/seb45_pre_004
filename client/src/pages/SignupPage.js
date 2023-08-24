import React, { useMemo, useState } from "react";
import { SignUpPageContainer, SignUpContainer, Input, InputAndLabelBox, InputLabel, SignUpButton, WarningSpan, SignupHeading, SignupPageModalBackdrop, SignupPageModalContainer, SignupPageModalText, SignupPageModalButton } from "../styles/signupPageStyle";

import { signupService } from "../services/loginServices";
import { useDispatch, useSelector } from "react-redux";
import { closeModalAction, openModalAction } from "../redux/actions/isModalOpenAction";

import tokens from '../styles/tokens.json'
import { ModalBackdrop, ModalContainer, ModalText, ModalButton } from "../components/Modal";
import { useLocation } from "react-router-dom";
import { setLocation } from "../redux/actions/locationAction";
const globalTokens = tokens.global;

const SignupPage = () => {
  const isModalOpen = useSelector((state)=>state.isModalOpenReducer);
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [nameWarningText, setNameWarningText] = useState("");
  const [idWarningText, setIdWarningText] = useState("");
  const [passwordWarningText, setPasswordWarningText] = useState("");
  const [passwordCheckWarningText, setPasswordCheckWarningText] = useState("");
  const [modalCategory, setModalCategory] = useState("");

  //현재 라우터 정보를 location redux로 관리
  useMemo(()=>{
    dispatch(setLocation(location));
  },[])
  const onChangeNameHandler = (e) => {
    let nameInput = e.target.value;
    setNameWarningText('');
    setName(nameInput);
  };
  const onChangeIdHandler = (e) => {
    let idInput = e.target.value;
    setId(idInput);
  };
  const onChangePwdHandler = (e) => {
    let passwordInput = e.target.value;
    //비밀번호 유효성 검사 로직
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
  //가입 처리 메소드
  const signUp = async () => {
      const res = await signupService({ name:name, id:id, password:password });
      if(res===undefined || res===null) {
        setModalCategory('error');
        dispatch(openModalAction());
      } else {
        setModalCategory('success')
        dispatch(openModalAction());
      }
    }
  //회원가입 버튼 클릭 시 동작
  const onSignupButtonClickHandler = (e) => {
    if(!name) {
      setNameWarningText('이름을 입력해 주세요!');
      return;
    }
    if(!id) {
      setIdWarningText('아이디를 입력해 주세요!');
      return;
    }
    if(!password) {
      setPasswordWarningText('비밀번호를 입력해 주세요!');
      return;
    }
    if(!passwordCheck) {
      setPasswordCheckWarningText('비밀번호 확인을 입력해 주세요!');
      return;
    }
    if( !nameWarningText && !idWarningText && !passwordWarningText && !passwordCheckWarningText) {
      //가입 성공 로직 작성
      signUp();
    }
  }
  //가입성공 모달창의 '로그인하기'버튼 클릭 시 동작
  const onLoginButtonClickListener = (e) => {
    //로그인 화면으로 이동 후 팝업창 닫음 (Link 태그라서 팝업창만 닫으면 됨)
    dispatch(closeModalAction());
  }
  //가입 실패 모달창의 '확인'버튼 클릭 시 동작
  const errorModalButtonHandler = (e) => {
    dispatch(closeModalAction());
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
      {
        modalCategory==='success'?(
          <SignupPageModalBackdrop isModalOpen={isModalOpen}>
          <SignupPageModalContainer isModalOpen={isModalOpen} onClick={ (e) => { e.stopPropagation() }}>
            <SignupPageModalText isModalOpen={isModalOpen} >회원 가입이 완료되었습니다.</SignupPageModalText>
            <SignupPageModalButton to='/login' isModalOpen={isModalOpen} color={globalTokens.pointColor.value} onClick={onLoginButtonClickListener}>로그인하기</SignupPageModalButton>
          </SignupPageModalContainer>
        </SignupPageModalBackdrop>
        )
        :modalCategory==='error'?(
          <ModalBackdrop isModalOpen={isModalOpen}>
            <ModalContainer  isModalOpen={isModalOpen} onClick={(e)=> {e.stopPropagation()}}>
              <ModalText isModalOpen={isModalOpen}>
                이미 아이디로 가입된 회원이 있거나,<br/>
                사용할 수 없는 회원정보입니다.
              </ModalText>
              <ModalButton color={tokens.global.pointColor.value} onClick={errorModalButtonHandler}>확인</ModalButton>
            </ModalContainer>
          </ModalBackdrop>
        ):null
      }
    </SignUpPageContainer>
  );
};

export default SignupPage;

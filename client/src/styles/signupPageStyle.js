import styled from "styled-components";
import { SignupInputDesign } from "../atoms/Input";
import tokens from "../styles/tokens.json";
import { RegularButtonDesign } from "../atoms/Button";
import { ModalBackdrop, ModalButton, ModalContainer, ModalLinkButton, ModalText } from '../components/Modal';
export const SignUpPageContainer = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SignUpContainer = styled.main`
width: fit-content;
border-radius: 20px;
padding: 45px;
box-shadow: 
  ${tokens.global.regularShadow.value.x}px 
  ${tokens.global.regularShadow.value.y}px 
  ${tokens.global.regularShadow.value.blur}px 
  ${tokens.global.regularShadow.value.spread}px 
  ${tokens.global.regularShadow.value.color};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${tokens.global.whiteColor.value};
`;

export const Input = styled(SignupInputDesign)`
padding: 1rem;
`;

export const InputAndLabelBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
margin-top: 25px;
margin-bottom: 3px;
`;

export const SignUpButton = styled(RegularButtonDesign)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export const WarningSpan = styled.span`
  margin-top: 3px;
  color: ${tokens.global.negativeColor.value};
  font-size: ${tokens.global.bodyText.value}px;
  text-align: right;
`;

export const SignupHeading = styled.h1`
    font-size: ${tokens.global.smallHeading.value}px;
    font-weight: ${tokens.global.bold.value};
`
export const SignupPageModalBackdrop = styled(ModalBackdrop)`
`
export const SignupPageModalContainer = styled(ModalContainer)`
`
export const SignupPageModalText = styled(ModalText)`
`
export const SignupPageModalButton = styled(ModalLinkButton)`
`

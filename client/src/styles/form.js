import styled from "styled-components";
import tokens from "../styles/tokens.json";
import { RegularButtonDesign } from "../atoms/Button";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export const InputBox = styled.div`
  background-color: ${tokens.global.pointColor.value};
  padding: 10px;
`;

export const InputContent = styled.div`
  background-color: ${tokens.global.greyColor.value};
  height: 100px;
  padding: 10px;
  height: 150px;
`;

export const ButtonAndContent = styled.div`
  width: 100%;
  text-align: right;
`;

export const QuestionP = styled.p`
  font-size: ${tokens.global.bodyText.value}px;
  margin: 10px;
`;
export const QuestionHead = styled.h1`
  font-size: ${tokens.global.bigHeading.value}px;
  margin: 10px;
  margin-top: 1rem;
`;
export const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  height: 125px;
`;

export const ButtonDesign = styled(RegularButtonDesign)`
  margin-top: 1rem;
  background-color: ${tokens.global.pointColor.value};
  &:hover {
    background-color: ${tokens.global.darkColor.value};
  }
`;

export const DisabledButton = styled(RegularButtonDesign)`
  margin-top: 1rem;
  background-color: ${tokens.global.greyColor.value};
  &:hover {
    background-color: ${tokens.global.greyColor.value};
    cursor: default;
  }
  opacity: 0.8; /* 80% 불투명도 */
`;

export const Warning = styled.p`
  color: red;
  font-size: ${tokens.global.bigHeading.value};
  margin: 1rem;
  font-weight: ${tokens.global.bold.value};
`;
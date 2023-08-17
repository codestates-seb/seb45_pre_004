import tokens from "../styles/tokens.json";
import { styled } from "styled-components";
import { ButtonDesign } from "../styles/form";
import { RegularInputDesign } from "../atoms/Input";
import { BigHeadingTypo, BodyTextTypo } from "../atoms/Typography";
import { RegularButtonDesign } from "../atoms/Button";

const globalTokens = tokens.global;

export const DisabledButton = styled(RegularButtonDesign)`
  margin-top: 1rem;
  background-color: ${globalTokens.greyColor.value};
  &:hover {
    background-color: ${globalTokens.greyColor.value};
    cursor: default;
  }
  opacity: 0.8; /* 80% 불투명도 */
`;

export const Warning = styled.p`
  color: red;
  font-size: ${globalTokens.bigHeading.value};
  margin: 1rem;
  font-weight: ${globalTokens.bold.value};
`;

export const QnAWritePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const QnAWriteInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${tokens.global.mainColor.value};
  width: 100vw;
  padding: 12px 16px;
`;
export const QuestionHead = styled(BigHeadingTypo)`
  padding-top: 12px;
  padding-left: 12px;
  padding-bottom: 3px;
`;
export const QuestionInfoTitleText = styled(BodyTextTypo)`
  font-weight: ${tokens.global.bold.value};
  margin-top: 4px;
  margin-bottom: 4px;
`;
export const QuestionInfoText = styled(BodyTextTypo)`
  margin-left: 8px;
  margin-bottom: 2px;
`;
export const QuestionTitleInputDesign = styled(RegularInputDesign)`
  width: 85%;
  margin-left: 1rem;
`;
export const Button = styled(ButtonDesign)`
  margin: 1rem;
`;
export const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 12px;
`;

export const PreviewContent = styled.div`
  // 위에서 스타일을 죽여서 따로 설정해줘야 하는듯?
  & blockquote {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 20px;
    padding-right: 20px;
    border-left: 5px solid lightgray;
  }
  & pre {
    background-color: lightgray;
  }
  & table tr td {
    border: 1px solid gray;
  }
  & strong {
    font-weight: bold;
  }
  & i {
    font-style: italic;
  }
  & h2 {
    font-size: 1.5rem;
  }
  & h3 {
    font-size: 1.2rem;
  }
  & h4 {
    font-size: 1rem;
  }
`;

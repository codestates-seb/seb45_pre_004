import React, { useEffect, useState } from "react";
import tokens from "../styles/tokens.json";
import { styled } from "styled-components";
import { ButtonDesign, Warning, DisabledButton } from "../styles/form";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import parse from "html-react-parser";
import { RegularInputDesign } from "../atoms/Input";
import { BigHeadingTypo, BodyTextTypo } from "../atoms/Typography";

const globalTokens = tokens.global;

const QnAWritePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const QnAWriteInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${tokens.global.mainColor.value};
  width: 100vw;
  padding: 12px 16px;
`
const QuestionHead = styled(BigHeadingTypo)`
  padding-top: 12px;
  padding-left: 12px;
  padding-bottom: 3px;
`;
const QuestionInfoTitleText = styled(BodyTextTypo)`
  font-weight: ${tokens.global.bold.value};
  margin-top: 4px;
  margin-bottom: 4px;
`
const QuestionInfoText = styled(BodyTextTypo)`
  margin-left: 8px;
  margin-bottom: 2px;
`
const QuestionTitleInputDesign = styled(RegularInputDesign)`
  width: 85%;
  margin-left: 1rem;
`;
const Button = styled(ButtonDesign)`
  margin: 1rem;
`;
const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Preview = styled.div`
  border: ${globalTokens.regularWidth.value}px solid ${globalTokens.lightGreyColor.value};
  flex-grow: 1;
  max-width: 650px;
  min-width: 300px;
`;
const PreviewP = styled.p`
  color: red;
  margin: 1rem;
`;

const PreviewContent = styled.div`
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

const QnAWritePage = ({ Editor, CKEditor }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // 서버로 데이터를 전송하는 로직
    // 게시판의 내용은 content라는 상태에 이미 담겨있으므로, 게시판의 내용을 어떻게 옮길지 고민 안해도 됨
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <QnAWritePageContainer>
        <QuestionHead>질문하세요!</QuestionHead>
        <QnAWriteInfoContainer>
            <QuestionInfoTitleText>좋은 질문을 작성하는 방법</QuestionInfoTitleText>
            <QuestionInfoText>여러분은 프로그래밍과 관련된 질문을 할 준비가되셨습니다. 아래 폼을 작성해보세요</QuestionInfoText>
            <QuestionInfoTitleText>단계</QuestionInfoTitleText>
            <QuestionInfoText>여러분의 문제를 제목 한 줄로 표현해보세요.</QuestionInfoText>
            <QuestionInfoText>더 구체적이게 여러분의 문제를 묘사해보세요.</QuestionInfoText>
            <QuestionInfoText>무엇을 했고 무엇을 기대했는지 작성하세요.</QuestionInfoText>
            <QuestionInfoText>여러분의 질문을 다시 한번 검토한 후에 제출해주세요!</QuestionInfoText>
        </QnAWriteInfoContainer>
      <form onSubmit={onSubmitHandler}>
        <div>
          <QuestionHead>질문 제목</QuestionHead>
          <QuestionTitleInputDesign
            placeholder="제목을 입력해 주세요."
            value={title}
            onChange={onChangeTitleHandler}
          />
          {title.length === 0 ? <Warning>제목을 입력해주세요</Warning> : <></>}
        </div>
        <div>
          <QuestionHead>질문 내용</QuestionHead>
          <PreviewWrapper>
            <CKEditor
              editor={Editor}
              data="<p>내용을 입력해주세요</p>"
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
                console.log(data);
              }}
            />
            <Preview>
              <PreviewP>미리보기</PreviewP>
              <PreviewContent>{parse(content)}</PreviewContent>
            </Preview>
          </PreviewWrapper>
        </div>
        <div>
          {content.length === 0 ? (
            <Warning>내용을 입력해주세요</Warning>
          ) : (
            <></>
          )}
          {title.length === 0 || content.length === 0 ? (
            <>
              <DisabledButton disabled>제출 불가능</DisabledButton>
            </>
          ) : (
            <Button>제출하기</Button>
          )}
        </div>
      </form>
    </QnAWritePageContainer>
  );
};

export default QnAWritePage;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import parse from "html-react-parser";
import {
  QnAWritePageContainer,
  QnAWriteInfoContainer,
  QuestionHead,
  QuestionInfoTitleText,
  QuestionInfoText,
  QuestionTitleInputDesign,
  Button,
  PreviewWrapper,
  Preview,
  PreviewP,
  PreviewContent,
  Warning,
  DisabledButton,
} from "../styles/qnaWrite";

const QnAWritePage = ({ Editor, CKEditor }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      // id는 서버측에서 제공
      `${process.env.REACT_APP_SERVER_URL}questions`,
      {
        title,
        content,
      }
    );
    const id = data.data["questionId"]; // 받은 아이디를 통해 페이지로 네비게이트 시킴
    navigate(`/detail/${id}`);
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <QnAWritePageContainer>
      <QuestionHead>질문하세요!</QuestionHead>
      <QnAWriteInfoContainer>
        <QuestionInfoTitleText>좋은 질문을 작성하는 방법</QuestionInfoTitleText>
        <QuestionInfoText>
          여러분은 프로그래밍과 관련된 질문을 할 준비가되셨습니다. 아래 폼을
          작성해보세요
        </QuestionInfoText>
        <QuestionInfoTitleText>단계</QuestionInfoTitleText>
        <QuestionInfoText>
          여러분의 문제를 제목 한 줄로 표현해보세요.
        </QuestionInfoText>
        <QuestionInfoText>
          더 구체적이게 여러분의 문제를 묘사해보세요.
        </QuestionInfoText>
        <QuestionInfoText>
          무엇을 했고 무엇을 기대했는지 작성하세요.
        </QuestionInfoText>
        <QuestionInfoText>
          여러분의 질문을 다시 한번 검토한 후에 제출해주세요!
        </QuestionInfoText>
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

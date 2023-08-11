import React, { useState, useRef } from "react";
import tokens from "../styles/tokens.json";
import { styled } from "styled-components";
import { ButtonDesign, Warning, DisabledButton } from "../styles/form";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import "prismjs/themes/prism.css";
import Prism from "prismjs";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";

const QuestionHead = styled.h1`
  font-size: ${tokens.global.bigHeading.value}px;
  margin: 1rem;
`;

const QuestionP = styled.p`
  font-size: ${tokens.global.bodyText.value}px;
  margin: 10px;
`;

const TextP = styled(QuestionP)`
  background-color: ${tokens.global.mainColor.value};
  margin: 10px;
  padding: 10px;
`;

const Input = styled.input`
  width: 85%;
  margin-left: 1rem;
`;

const Button = styled(ButtonDesign)`
  margin: 1rem;
`;

const QnAWritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const editorRef = useRef();

  const onChangeContentHandler = () => {
    setContent(editorRef.current.getInstance().getMarkdown());
  };

  const onChangeTitleHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // 서버로 데이터를 전송하는 로직
  };

  return (
    <>
      <div>
        <QuestionHead>질문하세요!</QuestionHead>
        <div>
          <TextP>
            좋은 질문을 작성하는 방법
            <br /> &nbsp; 여러분은 프로그래밍과 관련된 질문을 할 준비가
            되셨습니다. 아래 폼을 작성해보세요 <br />
            <br />
            단계 <br />
            &nbsp;여러분의 문제를 제목 한 줄로 표현해보세요.
            <br /> &nbsp;더 구체적이게 여러분의 문제를 묘사해보세요. <br />
            &nbsp;무엇을 했고 무엇을 기대했는지 작성하세요.
            <br />
            &nbsp;여러분의 질문을 다시 한번 검토한 후에 제출해주세요!
          </TextP>
        </div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div>
          <QuestionHead>질문 제목</QuestionHead>
          <Input
            placeholder="제목을 입력하세요."
            value={title}
            onChange={onChangeTitleHandler}
          />
          {title.length === 0 ? <Warning>제목을 입력해주세요</Warning> : <></>}
        </div>
        <div>
          <QuestionHead>질문 내용</QuestionHead>
          <Editor
            onChange={onChangeContentHandler}
            ref={editorRef}
            previewStyle="vertical"
            plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]}
          />
        </div>
        <div>
          {content.length < 20 ? (
            <Warning>20글자 이상 입력해주세요</Warning>
          ) : (
            <></>
          )}
          {title.length === 0 || content.length < 20 ? (
            <>
              <DisabledButton disabled>제출 불가능</DisabledButton>
            </>
          ) : (
            <Button>제출하기</Button>
          )}
        </div>
      </form>
    </>
  );
};

export default QnAWritePage;

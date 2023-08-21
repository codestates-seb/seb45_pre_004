import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import { getQuestionsService } from "../services/questionDataServices";
import Question from "../components/Question";
import {
  MainPageContainer,
  MainSmallNavigator,
  AskButton,
  QLink,
  LoadingContainer,
} from "../styles/main";
import "../styles/paginator.css";
import {
  ModalBackdrop,
  ModalButton,
  ModalContainer,
  ModalText,
} from "../components/Modal";
import loadingIndicator from "../assets/images/loadingIndicator.gif";
import {
  closeModalAction,
  openModalAction,
} from "../redux/actions/isModalOpenAction";
import tokens from "../styles/tokens.json";

const globalTokens = tokens.global;

const MainPage = () => {
  const dispatch = useDispatch();

  //isLogin state, userInfo redux state 조회
  const isLogin = useSelector((state) => state.isLoginReducer);
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [totalItems, setTotalItems] = useState(1);
  const isModalOpen = useSelector((state) => state.isModalOpenReducer);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const postQuestionAuth = () => {
    dispatch(openModalAction());
  };

  const modalBackdropClickHandler = () => {
    dispatch(closeModalAction());
  };

  const modalButtonClickHandler = () => {
    navigate("/login");
  };

  useEffect(() => {
    if (isLogin && isModalOpen) {
      navigate("/write");
      dispatch(closeModalAction());
    }
  });

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestionsService(activePage);
        setQuestions(data.content);
        setTotalItems(data.paginationInfo.totalItems);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
    window.scrollTo(0, 0);
  }, [activePage, dispatch]);

  return (
    <MainPageContainer>
      <MainSmallNavigator>
        {!isLogin ? (
          <ModalBackdrop
            isModalOpen={isModalOpen}
            onClick={modalBackdropClickHandler}
          >
            <ModalContainer isModalOpen={isModalOpen}>
              <ModalText>로그인이 필요합니다.</ModalText>
              <ModalButton
                onClick={modalButtonClickHandler}
                color={globalTokens.pointColor.value}
              >
                로그인하기
              </ModalButton>
            </ModalContainer>
          </ModalBackdrop>
        ) : (
          <></>
        )}
        <AskButton onClick={postQuestionAuth}>질문 쓰기</AskButton>
      </MainSmallNavigator>
      {questions.length > 0 ? (
        <>
          {questions
            .slice()
            .reverse()
            .map(
              (
                question // 여기서 reverse()를 사용하여 배열을 복사하고 역순으로 매핑합니다.
              ) => (
                <QLink
                  key={question.questionId}
                  to={`/detail/${question.questionId}`}
                >
                  <Question item={question} />
                </QLink>
              )
            )}
          <Pagination
            activePage={activePage}
            totalItemsCount={totalItems}
            pageRangeDisplayed={5}
            prevPageText={"◀️"}
            nextPageText={"▶️"}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <LoadingContainer>
          <img alt="loading" src={loadingIndicator} width="50px" />
        </LoadingContainer>
      )}
      위 코드에서 questions.slice().reverse().map(...)를 사용하여 questions
      배열을 역순으로 매핑하고 원본 배열은 변경하지 않습니다. 이렇게 하면 배열의
      아이템이 역순으로 렌더링되어 보여질 것입니다. ㅋ{" "}
    </MainPageContainer>
  );
};

export default MainPage;

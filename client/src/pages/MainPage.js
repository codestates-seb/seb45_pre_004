import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
import { setLocation } from "../redux/actions/locationAction";

const globalTokens = tokens.global;

const MainPage = () => {
  const dispatch = useDispatch();

  //isLogin state, userInfo redux state 조회
  const isLogin = useSelector((state) => state.isLoginReducer);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  const [activePage, setActivePage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [totalItems, setTotalItems] = useState(1);
  const isModalOpen = useSelector((state) => state.isModalOpenReducer);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const postQuestionAuth = () => {
    if (!isLogin) {
      dispatch(openModalAction());
    } else {
      navigate("/write");
    }
  };

  const modalBackdropClickHandler = () => {
    dispatch(closeModalAction());
  };

  const modalButtonClickHandler = () => {
    navigate("/login");
  };

  useMemo(() => {
    dispatch(setLocation(location));
  }, [dispatch, location]);

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
  }, [activePage, dispatch, questions.length]);

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
          {questions.map((question) => (
            <QLink
              key={question.questionId}
              to={`/detail/${question.questionId}`}
            >
              <Question item={question} />
            </QLink>
          ))}
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
    </MainPageContainer>
  );
};

export default MainPage;

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
import Modal from "../components/Modal";
import loadingIndicator from '../assets/images/loadingIndicator.gif'

const MainPage = () => {
  const dispatch = useDispatch();
  //isLogin state, userInfo redux state 조회
  const isLogin = useSelector((state) => state.isLoginReducer);
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState(1);
  const [questions, setQuestions] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const postQuestionAuth = () => {
    setIsModal(true);
  };

  useEffect(() => {
    if (isLogin && isModal) {
      navigate("/write");
    }
  });


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const data = await getQuestionsService(activePage);
        setQuestions(data);
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
          <Modal
            isModalOpen={isModal}
            setIsModal={setIsModal}
            modalText="질문하기 위해 로그인 하십시오!"
          />
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
              href={`/detail/${question.questionId}`}
            >
              <Question item={question} />
            </QLink>
          ))}
          <Pagination
            activePage={activePage}
            totalItemsCount={
              20
              /* 전체 페이지나 질문수 받아오면 동적값으로 수정 */
            }
            pageRangeDisplayed={5}
            prevPageText={"◀️"}
            nextPageText={"▶️"}
            onChange={handlePageChange}
          />
        </>
      ) : (
        <LoadingContainer>
          <img alt="loading" src={loadingIndicator} width='50px'/>
        </LoadingContainer>
        
      )}
    </MainPageContainer>
  );
};

export default MainPage;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Pagination from "react-js-pagination";
import { getQuestionsService } from "../services/questionDataServices";
import Question from "../components/Question";
import {
  MainPageContainer,
  MainSmallNavigator,
  AskButton,
  QLink,
} from "../styles/main";
import "../styles/paginator.css";

const MainPage = () => {
  const dispatch = useDispatch();

  const [activePage, setActivePage] = useState(1);
  const [questions, setQuestions] = useState([]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

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
        <AskButton to="/write">질문 쓰기</AskButton>
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
        <p>Loading...</p>
      )}
    </MainPageContainer>
  );
};

export default MainPage;

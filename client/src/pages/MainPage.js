import { useSelector } from "react-redux";

import {
	MainPageContainer,
	MainSmallNavigator,
	AskButton,
	QLink,
} from "../styles/main";

import Question from "../components/Question";

const MainPage = () => {
	const questions = useSelector((state) => state.questionListReducer);

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
							to={`/detail/${question.questionId}`}
						>
							<Question item={question} />
						</QLink>
					))}
				</>
			) : (
				<p>Loading...</p>
			)}
		</MainPageContainer>
	);
};

export default MainPage;

import { useState } from "react";
import { useSelector } from "react-redux";

import {
	MainPageContainer,
	MainSmallNavigator,
	AskButton,
	QLink,
} from "../styles/main";

import Question from "../components/Question";

const MainPage = () => {
	const [isLoading] = useState(false);
	const questions = useSelector((state) => state.questionListReducer);

	return (
		<MainPageContainer>
			<MainSmallNavigator>
				<AskButton to="/write">질문 쓰기</AskButton>
			</MainSmallNavigator>
			{isLoading || questions.length < 1 ? (
				<p>Loading...</p>
			) : (
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
			)}
		</MainPageContainer>
	);
};

export default MainPage;

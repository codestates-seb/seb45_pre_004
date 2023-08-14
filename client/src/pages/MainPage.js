import { useState } from "react";

import {
	MainPageContainer,
	MainSmallNavigator,
	AskButton,
	QLink,
} from "../styles/main";

import Question from "../components/Question";

const MainPage = () => {
	const [isLoading, setIsLoading] = useState(false);
	const questions = [
		{
			questionId: 1,
			title: "제목1",
			content: "내용",
			createdAt: "2023/08/14 05:06",
			viewCount: 0,
		},
		{
			questionId: 2,
			title: "제목2",
			content: "내용",
			createdAt: "2023/08/14 05:06",
			viewCount: 0,
		},
		{
			questionId: 3,
			title: "제목3",
			content: "내용",
			createdAt: "2023/08/14 05:06",
			viewCount: 0,
		},
		{
			questionId: 4,
			title: "제목4",
			content: "내용",
			createdAt: "2023/08/14 05:06",
			viewCount: 0,
		},
		{
			questionId: 5,
			title: "제목5",
			content: "내용",
			createdAt: "2023/08/14 05:06",
			viewCount: 0,
		},
		{
			questionId: 6,
			title: "제목6",
			content: "내용",
			createdAt: "2023/08/14 05:06",
			viewCount: 0,
		},
		{
			questionId: 7,
			title: "제목7",
			content: "내용",
			createdAt: "2023/08/14 05:06",
			viewCount: 0,
		},
		{
			questionId: 8,
			title: "제목8",
			content: "내용",
			createdAt: "2023/08/14 05:07",
			viewCount: 0,
		},
		{
			questionId: 9,
			title: "제목9",
			content: "내용",
			createdAt: "2023/08/14 05:07",
			viewCount: 0,
		},
		{
			questionId: 10,
			title: "제목10",
			content: "내용",
			createdAt: "2023/08/14 05:07",
			viewCount: 0,
		},
	];

	return (
		// 렌더링 테스트를 위해 임시로 적용해 두었습니다! 필요시 삭제 부탁드립니다.
		<MainPageContainer>
			<MainSmallNavigator>
				<AskButton to="/write">질문 쓰기</AskButton>
			</MainSmallNavigator>
			{isLoading ? (
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

import React, { useEffect } from "react";
import Question from "../components/Question";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import tokens from '../styles/tokens.json'
import { SmallLinkButtonDesign } from "../atoms/Button";
import { useSelector } from "react-redux";

const globalTokens = tokens.global;

export const MainPageContainer = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
`
export const MainSmallNavigator = styled.section`
	width: 90%;
	display: flex;
	flex-direction: row;
	justify-content: end;
`
const MainPage = () => {
	const questions = useSelector((state)=>state.questionListReducer);
	console.log(questions);
	return (
	// 렌더링 테스트를 위해 임시로 적용해 두었습니다! 필요시 삭제 부탁드립니다.
	<MainPageContainer>
		<MainSmallNavigator>
			<SmallLinkButtonDesign to='/write' color={globalTokens.pointColor.value}>질문 쓰기</SmallLinkButtonDesign>
		</MainSmallNavigator>
		{
			questions.length>0? questions.map((e)=><Question item={e}/>):null
		}
	</MainPageContainer>
	);
};

export default MainPage;

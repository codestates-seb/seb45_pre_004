import React from "react";
import Question from "../components/Question";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import tokens from '../styles/tokens.json'
import { SmallLinkButtonDesign } from "../atoms/Button";

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
	return (
	// 렌더링 테스트를 위해 임시로 적용해 두었습니다! 필요시 삭제 부탁드립니다.
	<MainPageContainer>
		<MainSmallNavigator>
			<SmallLinkButtonDesign to='/write' color={globalTokens.pointColor.value}>질문 쓰기</SmallLinkButtonDesign>
		</MainSmallNavigator>
		<Link to="/detail" 
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center"}}>
			<Question />
		</Link>
	</MainPageContainer>
	);
};

export default MainPage;

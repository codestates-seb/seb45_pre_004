import React from "react";

import Question from "../components/Question";
import { Link } from "react-router-dom";

const MainPage = () => {
	return (
		// 렌더링 테스트를 위해 임시로 적용해 두었습니다! 필요시 삭제 부탁드립니다.
			<Link
				to="/detail"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Question />
			</Link>
	);
};

export default MainPage;

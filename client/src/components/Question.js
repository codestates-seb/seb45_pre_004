import { useState, useEffect } from "react";

import DateDistance from "./DateDistance";
import {
	Wrapper,
	Current,
	Container,
	Contents,
	Info,
} from "../styles/question";

export default function Question({ item }) {
	const inputDate = "2023-08-08T09:00:00.000Z"; // 예시: YYYY-MM-DDTHH:mm:ss.SSSZ

	const minWidthToShow = 1100;
	const [showCurrent, setShowCurrent] = useState(true);

	useEffect(() => {
		// 화면 너비 변경 이벤트 핸들러 함수
		const handleResize = () => {
			if (window.innerWidth <= minWidthToShow) {
				setShowCurrent(false);
			} else {
				setShowCurrent(true);
			}
		};

		// 최초 마운트 시 이벤트 리스너 추가
		window.addEventListener("resize", handleResize);

		// 컴언마운트 시 이벤트 리스너 제거
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<Wrapper>
				{showCurrent && (
					<Current>
						<div>1 {/* item.answer.length */} Answers</div>
						<div>{ item.viewCount } views</div>
					</Current>
				)}
				<Container>
					<Contents>
						<h1>
							{item.title}
						</h1>
						<div>
							{ item.content }
						</div>
					</Contents>
					<Info>
						<span>Nanda Y {/* item.author */}</span>
						<section style={{ display: "flex" }}>
							<div>- 21 {/* item.asked.length */} </div>
							<div>asked</div>
							<DateDistance inputDate={inputDate} /* item.createdAt */ />
						</section>
					</Info>
				</Container>
			</Wrapper>
		</>
	);
}

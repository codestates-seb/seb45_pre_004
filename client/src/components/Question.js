import { useState, useEffect } from "react";

import DateDistance from "./DateDistance";
import {
	Wrapper,
	Current,
	Container,
	Contents,
	Info,
} from "../styles/question";

import { useSelector } from "react-redux";

export default function Question({ item }) {
	const browserWidth = useSelector((state) => state.browserWidthReducer);
	const [showCurrent, setShowCurrent] = useState(true);

	useEffect(() => {
		// 화면 너비 변경 이벤트 핸들러 함수
		const handleResize = () => {
			if (browserWidth > 900) {
				setShowCurrent(true);
			} else {
				setShowCurrent(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [browserWidth]);

	return (
		<>
			<Wrapper>
				{showCurrent && (
					<Current>
						<div>{item.reply_count} Answers</div>
						<div>{item.viewCount} views</div>
					</Current>
				)}
				<Container>
					<Contents>
						<h1>{item.title}</h1>
						<div>{item.content.slice(0, 100)}</div>
					</Contents>
					<Info>
						<span> {item.user_id}</span>
						<section style={{ display: "flex" }}>
							asked
							<DateDistance inputDate={item.createdAt} />
							ago
						</section>
					</Info>
				</Container>
			</Wrapper>
		</>
	);
}

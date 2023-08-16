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

	return (
		<>
			<Wrapper>
				{browserWidth>900 && (
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

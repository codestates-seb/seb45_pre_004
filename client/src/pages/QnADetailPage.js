import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import DateDistance from "../components/DateDistance";
import {
	Wrapper,
	Thread,
	Card,
	QHead,
	AHead,
	InfoWrapper,
	Info,
	HeadInfo,
	Edit,
	Contents,
	User,
	UserInfo,
	UserInfoData,
	AnswerCard,
	SubmitButton,
} from "../styles/qnaDetail";

const QnADetailPage = ({ item, id }) => {
	const askedAt = "2023-08-08T09:00:00.000Z";
	const modifiedAt = "2023-08-09T09:00:00.000Z";
	const answeredAt = "2023-08-10T09:00:00.000Z";

	return (
		<Wrapper>
			<Thread />
			<Card>
				<QHead>
					<h1>
						Camera plugin in flutter making callback after taking picture{" "}
						{/* {item.title} */}
					</h1>
					<InfoWrapper>
						<HeadInfo>
							<Info>
								<div>Asked</div>
								<DateDistance inputDate={askedAt}>
									{/* {item.askedAt} */}
								</DateDistance>
							</Info>
							<Info>
								<div>Modified</div>
								<DateDistance inputDate={modifiedAt}>
									{/* {item.modifiedAt} */}
								</DateDistance>
							</Info>
							<Info>
								<span>Viewed</span>
								<div>6 {/* {item.views} */}</div>
							</Info>
						</HeadInfo>
						<Edit>
							{/* 받은 id의 author와 현재 로그인된 author의 ID가 같으면 활성화하기 */}
							<div>Edit</div>
							<div>Delete</div>{" "}
						</Edit>
					</InfoWrapper>
				</QHead>
				<hr />
				<Contents>
					I am trying to capture image using camera in flutter. Image should be
					captured, for that using takePicture method. I am understanding
					whether the image is capturing or not, in debug, I got camera callback
					exception, this code when I click on button screen blinks. Its not
					navigating.
					{/* {item.content} */}
				</Contents>
				<User>
					<DateDistance inputDate={answeredAt}></DateDistance>
					<UserInfo>
						<img
							src="https://i.ytimg.com/vi/OzQeCv0uNlE/mqdefault.jpg"
							alt="testimg"
						>
							{/* {item.author.picture} */}
						</img>
						<UserInfoData>
							<div>Semin Kim {/* {item.author} */}</div>
							<div>21 Questions{/* {item.author.info} */}</div>
						</UserInfoData>
					</UserInfo>
				</User>
			</Card>
			<Card>
				<AHead>
					<h1>1 {/* {item.Answer.length} */} Answer</h1>
				</AHead>
				<hr />
				<Contents>
					Melbourne regularly hits the "world’s best coffee cities" lists, and
					once you start exploring the nooks and crannies of its laneways and
					inner-city suburbs, you'll see why. It's a town for coffee purists –
					more pour-over than pumpkin spice latte. Melbourne's coffee culture
					started percolating thanks to a post-war wave of Italian immigrants
					who brought their gleaming espresso machines with them. By the 1980s,
					the coffee scene had morphed into the city's famed cafe culture, with
					its penchant for avocado-heavy brunches, and not long after that,
					local roasters and baristas took Melbourne coffee into the
					stratosphere. Melbourne coffee today champions a sustainable and
					ethical approach, using brewing methods that highlight the qualities
					of the bean. Many roasters showcase exclusive Cup of Excellence
					microlots – small harvests of rare or unusual coffee plants that
					present similar flavour profiles to seasonal wines – and some offer
					free "cuppings" (coffee tastings) that are open to the public if you
					want a front seat to the latest beans in town. From the historic to
					the iconic to the symphonic, here are some of Melbourne's tastiest
					java joints.
					{/* {item.answer.content}, 재귀나 반복문 사용? */}
				</Contents>
				<User>
					<DateDistance inputDate={answeredAt}>
						{" "}
						{/* {item.answeredAt} */}
					</DateDistance>
					<UserInfo>
						<img
							src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRs8RqGTTo4W7CbSoPYL0rJlwSPMquhVCi1dPyeG13rCNpLoa9q"
							alt="testimg"
						>
							{/* {item.answer.author.picture} */}
						</img>
						<UserInfoData>
							<div>SUF team {/* {item.answer.author} */}</div>
							<div>100 answers{/* {item.answer.author.info} */}</div>
						</UserInfoData>
					</UserInfo>
				</User>{" "}
			</Card>
			<AnswerCard>
				<AHead>
					<h1>Your Answer</h1>
				</AHead>
				<hr />
				<div className="ckeditor-container">
					<CKEditor
						editor={ClassicEditor}
						onReady={(editor) => {}}
						// 더 찾아보고 로직 작성
					/>
				</div>
				<SubmitButton>Post Your Answer</SubmitButton>
			</AnswerCard>
		</Wrapper>
	);
};

export default QnADetailPage;

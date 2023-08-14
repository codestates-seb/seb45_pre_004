import { useState } from "react";
import { useSelector } from "react-redux";

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

const QnADetailPage = ({ Editor, CKEditor }) => {
	const question = useSelector((state) => state.questionDetailReducer);

	const [editMode, setEditMode] = useState(false);
	const [content, setContent] = useState("");
	const [editedContent, setEditedContent] = useState("");

	return (
		<Wrapper>
			<Thread />

			<Card>
				<QHead>
					<h1>{question.title}</h1>
					<InfoWrapper>
						<HeadInfo>
							<Info>
								<div>Asked</div>
								<DateDistance inputDate={question.createdAt}></DateDistance>
							</Info>
							<Info>
								<span>Viewed</span>
								<div>{question.viewCount}</div>
							</Info>
						</HeadInfo>
						{/* question.replies.userId === currentUser.userId 등으로 검증 필요*/}
						{question.userId && (
							<Edit>
								{/* editMode 상태에 따라 버튼 텍스트 토글 */}
								<div
									onClick={() => setEditMode(prevEditMode => !prevEditMode)}
								>
									{editMode ? "Done" : "Edit"}
								</div>
								<div>Delete</div>
							</Edit>
						)}
					</InfoWrapper>
				</QHead>
				<hr />
				{/* editMode 상태에 따라 CKEditor 또는 질문 내용 표시 */}
				{editMode ? (
					<CKEditor
						editor={Editor}
						data={editedContent}
						onChange={(event, editor) => {
							const data = editor.getData();
							setEditedContent(data);
							console.log(data);
						}}
					/>
				) : (
					<Contents>{question.content}</Contents>
				)}
				<User>
					<DateDistance inputDate={question.replies.createdAt}></DateDistance>
					<UserInfo>
						<img
							src="https://i.ytimg.com/vi/OzQeCv0uNlE/mqdefault.jpg"
							alt="testimg"
						>
							{/* {question.userId.picture} */}
						</img>
						<UserInfoData>
							<div>Semin Kim {/* {question.userId} */}</div>
						</UserInfoData>
					</UserInfo>
				</User>
			</Card>

			{question.replies.map((reply) => (
				<Card key={reply.replyId}>
					<AHead>
						<h1>1 {/* {question.replies.length} */} Answer</h1>
						{/* reply.userId === currentUser.userId 등으로 검증 필요*/}
						{reply.userId && (
							<Edit>
								{/* editMode 상태에 따라 버튼 텍스트 토글 */}
								<div
									onClick={() => setEditMode((prevEditMode) => !prevEditMode)}
								>
									{editMode ? "Done" : "Edit"}
								</div>
								<div>Delete</div>
							</Edit>
						)}
					</AHead>
					<hr />
					{/* editMode 상태에 따라 CKEditor 또는 질문 내용 표시 */}
					{editMode ? (
						<CKEditor
							editor={Editor}
							data={editedContent}
							onChange={(event, editor) => {
								const data = editor.getData();
								setEditedContent(data);
							}}
						/>
					) : (
						<Contents>{reply.content}</Contents>
					)}
					<User>
						<DateDistance inputDate={reply.createdAt}></DateDistance>
						<UserInfo>
							<img
								src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRs8RqGTTo4W7CbSoPYL0rJlwSPMquhVCi1dPyeG13rCNpLoa9q"
								alt="testimg"
							/>
							{/* {reply.userId.picture} */}
							<UserInfoData>
								<div>SUF team {/* {reply.userId} */}</div>
								<div>100 answers{/* {reply.userId.info} */}</div>
							</UserInfoData>
						</UserInfo>
					</User>
				</Card>
			))}

			<AnswerCard>
				<AHead>
					<h1>Your Answer</h1>
				</AHead>
				<hr />
				<CKEditor
					editor={Editor}
					data={content}
					onChange={(event, editor) => {
						const data = editor.getData();
						setContent(data);
					}}
				/>
				<SubmitButton>Post Your Answer</SubmitButton>
			</AnswerCard>
		</Wrapper>
	);
};

export default QnADetailPage;

import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useDispatch, useSelector } from "react-redux";

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
	ContentBox,
} from "../styles/qnaDetail";
import { setLocation } from "../redux/actions/locationAction";

const QnADetailPage = ({ Editor, CKEditor }) => {
	let params = useParams();
	let location = useLocation().pathname;
	let dispatch = useDispatch();

	const userInfo = useSelector((state) => state.userInfoReducer);

	const [editMode, setEditMode] = useState(false);
	const [editedContent, setEditedContent] = useState("");

	const [content, setContent] = useState("");

	const [question, setQuestion] = useState({});
	const [replies, setReplies] = useState([]);

	const navigate = useNavigate();
	const onClickEditHandler = () => {
		if (editMode === true) {
			axios.patch(
				`${process.env.REACT_APP_SERVER_URL}/questions/${question.questionId}`,
				{ title: question.title, content: editedContent }
			);
		}
		setEditMode((prevEditMode) => !prevEditMode);
	};

	const onClickDeleteHandler = () => {
		axios.delete(
			`${process.env.REACT_APP_SERVER_URL}/questions/${question.questionId}`
		);
		navigate("/"); // 삭제한 후 리디렉션
	};

	const onSubmitHandler = async (e) => {
		const token = userInfo.token;
		const questionId = question.questionId;
		e.preventDefault();

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_SERVER_URL}/api/replies`,
				{
					content: content,
					questionId: questionId,
				},
				{ headers: { Authorization: token } }
			);

			setReplies(response.data.replies);
		} catch (error) {
			console.error("Error:", error);
		}
	};

	//현재 라우터 정보를 location redux로 관리
	useMemo(() => {
		dispatch(setLocation(location));
	}, [dispatch, location]);

	useEffect(() => {
		async function getDetailInfo() {
			const data = await axios.get(
				`${process.env.REACT_APP_SERVER_URL}/questions/${params.id}`
			);
			setQuestion(data.data);
		}
		getDetailInfo();
	}, [params.id]);

	useEffect(() => {
		Prism.highlightAll();
	}, [editedContent, question.content]);

	console.log();

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
						{question.id === userInfo.id ? (
							<Edit>
								{/* editMode 상태에 따라 버튼 텍스트 토글 */}
								<div onClick={onClickEditHandler}>
									{editMode ? "Done" : "Edit"}
								</div>
								<div onClick={onClickDeleteHandler}>Delete</div>
							</Edit>
						) : (
							<></>
						)}
					</InfoWrapper>
				</QHead>
				<hr />

				{/* editMode 상태에 따라 CKEditor 또는 질문 내용 표시 */}
				{editMode ? (
					<CKEditor
						editor={Editor}
						data={editedContent !== "" ? editedContent : question.content}
						onChange={(event, editor) => {
							const data = editor.getData();
							setEditedContent(data);
						}}
					/>
				) : (
					<ContentBox>
						<Contents>
							{editedContent !== ""
								? parse(editedContent)
								: question.content && parse(question.content)}
						</Contents>
					</ContentBox>
				)}

				<User>
					{/*<DateDistance inputDate={question.replies.createdAt}></DateDistance>*/}
					<UserInfo>
						<img
							src="https://i.ytimg.com/vi/OzQeCv0uNlE/mqdefault.jpg"
							alt="testimg"
						></img>
						<UserInfoData>
							<div> {question.authorId} 님</div>
						</UserInfoData>
					</UserInfo>
				</User>
			</Card>
			{replies &&
				replies.map((reply) => (
					<Card key={reply.reply_id}>
						<AHead>
							<h1>{replies.length} Answer</h1>
							{/* reply.userId === currentUser.userId 등으로 검증 필요*/}
							{reply.authorId && (
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
							<ContentBox>
								<Contents>{reply.content}</Contents>
							</ContentBox>
						)}
						<User>
							<DateDistance inputDate={reply.createdAt}></DateDistance>
							<UserInfo>
								<img
									src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRs8RqGTTo4W7CbSoPYL0rJlwSPMquhVCi1dPyeG13rCNpLoa9q"
									alt="testimg"
								/>
								<UserInfoData>
									<div>{reply.authorId}</div>
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
				<form onSubmit={onSubmitHandler}>
					<CKEditor
						editor={Editor}
						onChange={(event, editor) => {
							const data = editor.getData();
							setContent(data);
						}}
					/>
					<SubmitButton>Post Your Answer</SubmitButton>
				</form>
			</AnswerCard>
		</Wrapper>
	);
};

export default QnADetailPage;

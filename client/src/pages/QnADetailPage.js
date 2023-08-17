import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import parse from "html-react-parser";
import Prism from "prismjs";

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
  // const question = useSelector((state) => state.questionDetailReducer);
  // 리덕스 사용시, 렌더링 시 상태값을 제 때 못 가져오는듯? state로 대체시 문제 없음
  // 애초에 여기서만 쓰는 데이터이므로, 리덕스로 관리할 필요는 없을듯
  // 만약 리덕스를 사용하고자한다면, 차라리 questionList 리듀서에서 필요한 아이디로 쏙쏙 뽑아쓰는것이 낫다고 보여짐.
  // 백엔드 측에서 repiles가 아니라 replys라고 해둠. 오타 수정을 둘 중 한 곳에서 해야하는데
  let params = useParams();

  const [editMode, setEditMode] = useState(false);
  const [content, setContent] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [question, setQuestion] = useState({});

  const navigate = useNavigate();

  const onClickEditHandler = () => {
    if (editMode === true) {
      // axios.patch(`${process.env.REACT_APP_SERVER_URL}/${question.questionId}`, { editedContent });
    }
    setEditMode((prevEditMode) => !prevEditMode);
    console.log("CHANGED");
  };

  const onClickDeleteHandler = () => {
    // axios.delete(`${process.env.REACT_APP_SERVER_URL}/${question.questionId}`);
    navigate("/"); // 삭제한 후 리디렉션
  };

  const onClickSubmitHandler = (e) => {
    e.preventDefault();
    // axios.post(`${process.env.REACT_APP_SERVER_URL/api/replies}`, { content });
  };

  useEffect(() => {
    async function getDetailInfo() {
      const data = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/questions/${params.id}`
      );
      setQuestion(data.data);
    }
    getDetailInfo();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [editedContent]);

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
            {/* question.replys.userId === currentUser.userId 등으로 검증 필요*/}
            {
              /*question.userId && */ <Edit>
                {/* editMode 상태에 따라 버튼 텍스트 토글 */}
                <div onClick={onClickEditHandler}>
                  {editMode ? "Done" : "Edit"}
                </div>
                <div onClick={onClickDeleteHandler}>Delete</div>
              </Edit>
            }
          </InfoWrapper>
        </QHead>
        <hr />

        {/* editMode 상태에 따라 CKEditor 또는 질문 내용 표시 */}
        {editMode ? (
          <CKEditor
            editor={Editor}
            data={question.content}
            onChange={(event, editor) => {
              const data = editor.getData();
              setEditedContent(data);
            }}
          />
        ) : (
          <Contents>{question.content && parse(question.content)}</Contents>
        )}

        <User>
          {/*<DateDistance inputDate={question.replys.createdAt}></DateDistance>*/}
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
      {question.replys &&
        question.replys.map((reply) => (
          <Card key={reply.replyId}>
            <AHead>
              <h1>{question.replys.length} Answer</h1>
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
        <form onClick={onClickSubmitHandler}>
          <CKEditor
            editor={Editor}
            data={content}
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

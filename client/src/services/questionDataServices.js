import axios from "axios";

//전체 질문 목록을 조회하는 메소드
export const getQuestionsService = async () => {
	let response = await axios.get(`http://ec2-3-34-134-76.ap-northeast-2.compute.amazonaws.com:8080/questions?page=1&size=10`);
	return response.data;
}
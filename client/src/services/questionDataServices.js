import axios from "axios";
import { ROOT_URL } from "./index";

//전체 질문 목록을 조회하는 메소드
export const getQuestionsService = async (page = 1) => {
	try {
		let response = await axios.get(
			`${ROOT_URL}/questions?page=${page}&size=10`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

// 질문 상세 데이터 조회
export const getQuestionDetailService = async (id) => {
	try {
		const response = await axios.get(
			`${ROOT_URL}/questions/id=${id}`
		);
		return response.data;
	} catch (error) {
		throw error;
	}
};

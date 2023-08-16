export const GET_QUESTIONS_LIST = 'GET_QUESTIONS_LIST'

export const getQuestionsListActon = (questionsList) => {
    return {
        type: GET_QUESTIONS_LIST,
        payload: questionsList,
    }
}

export const GET_QUESTION_DETAIL = 'GET_QUESTION_DETAIL';

export const getQuestionDetailAction = (questionDetail) => {
	return {
		type: GET_QUESTION_DETAIL,
		payload: questionDetail,
	};
};
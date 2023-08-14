import {
	GET_QUESTIONS_LIST,
	GET_QUESTION_DETAIL,
} from "../actions/questionListAction";

const initialState = [];

export const questionListReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_QUESTIONS_LIST:
			return action.payload;
		default:
			return state;
	}
};

export const questionDetailReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_QUESTION_DETAIL:
			return action.payload;
		default:
			return state;
	}
};
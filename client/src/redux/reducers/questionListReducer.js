import { GET_QUESTIONS_LIST } from "../actions/questionListAction";

const initialState = [];

export const questionListReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_QUESTIONS_LIST: 
            return action.payload;
        default: return state;
    }
}
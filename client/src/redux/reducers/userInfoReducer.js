import { GET_USER_INFO } from "../actions/userInfoAction";

const userInfoInitialState = {};

//userInfo state를 변경하는 reducer
export function userInfoReducer (state = userInfoInitialState, action) {
	switch (action.type) {
		case GET_USER_INFO : 
			return action.payload;
		default :
			return state;
	}
}
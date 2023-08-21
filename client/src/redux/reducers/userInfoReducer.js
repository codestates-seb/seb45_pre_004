import { GET_USER_INFO, REMOVE_USER_INFO } from "../actions/userInfoAction";

const userInfoInitialState = {};

//userInfo state를 변경하는 reducer
export function userInfoReducer (state = userInfoInitialState, action) {
	switch (action.type) {
		case GET_USER_INFO : 
			return action.payload;
		case REMOVE_USER_INFO: 
			return userInfoInitialState;
		default :
			return state;
	}
}
import { SET_IS_LOGIN_TRUE, SET_IS_LOGIN_FALSE } from "../actions/isLoginAction";

// 초기 상태
const isLoginInitialState = false;

//isLogin state를 변경하는 reducer
export function isLoginReducer(state = isLoginInitialState, action) {
	switch (action.type) {
		case SET_IS_LOGIN_TRUE:
			return true;
		case SET_IS_LOGIN_FALSE:
			return false;
		default:
			return state;
	}
}


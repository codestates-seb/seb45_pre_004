export const SET_IS_LOGIN_TRUE = "SET_IS_LOGIN_TRUE";
export const SET_IS_LOGIN_FALSE = "SET_IS_LOGIN_FALSE";

//isLogin state Action 생성자
export function setIsLoginTrue() {
	return { type: SET_IS_LOGIN_TRUE };
}
export function setIsLoginFalse() {
	return { type: SET_IS_LOGIN_FALSE };
}


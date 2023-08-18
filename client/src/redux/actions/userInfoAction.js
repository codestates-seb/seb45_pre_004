export const GET_USER_INFO = "GET_USER_INFO";

//userInfo state Action 생성자
export function setUserInfo(token,id,name) {
	return { 
		type: GET_USER_INFO,
		payload: {
			token:token,
			id:id,
			name:name,
		}
	};
}
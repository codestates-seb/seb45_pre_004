export const GET_USER_INFO = "GET_USER_INFO";

//userInfo state Action 생성자
export function setUserInfo({userId,id,name}) {
	return { 
		type: GET_USER_INFO,
		payload: {
			userId:userId,
			id:id,
			name:name,
		}
	};
}
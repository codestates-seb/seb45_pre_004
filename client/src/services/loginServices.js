import axios from "axios"
import { ROOT_URL } from "./index";

//회원가입 API
export const signupService = async ({name,id,password}) => {
    try {
        const response = await axios.post(
            `${ROOT_URL}/api/members`,
            {
                name:name,
                id:id,
                password:password
            }
        )
        return response.data;
    } catch(error) {
        console.log(error);
    }
}

//로그인 API
export const loginService = async ({id,password}) => {
    try {
        const response = await axios.post(
            `${ROOT_URL}/api/members/login`,
            {
                id:id,
                password:password
            }
        );
        return response.data;
    } catch (err) {
        return undefined;
    }

}


//유저 정보 조회 API
export const getUserInfoService = async ({userId}) => {
    const response = await axios.get(
        `${ROOT_URL}/api/members/${userId}`
    )
    console.log(response);
}
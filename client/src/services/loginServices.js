import axios from "axios"

//회원가입 API
export const signupService = async ({name,id,password}) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/members`,
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
            `${process.env.REACT_APP_SERVER_URL}/api/members/login`,
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

//로그아웃 API
export const logoutService = async (token) => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_SERVER_URL}/api/members/logout`,
            {
    
            },
            {
                headers: { Authorization: token }
            }
        );
        return response.status;
    } catch (error) {
        return error;
    }
}

//유저 정보 조회 API
export const getUserInfoService = async ({userId}) => {
    const response = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/api/members/${userId}`
    )
    console.log(response);
}


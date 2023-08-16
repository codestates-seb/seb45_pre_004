import axios from "axios"
import { ROOT_URL } from "./index";

export const signupService = async ({name,id,password}) => {
    const response = await axios.post(
        `${ROOT_URL}/api/members`,
        {
            name:name,
            id:id,
            password:password
        }
    )
    return response.data;
}
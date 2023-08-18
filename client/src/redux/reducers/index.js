import { combineReducers } from "redux";
import { isLoginReducer } from "./isLoginReducer";
import { userInfoReducer } from "./userInfoReducer";
import { browserWidthReducer } from './browserWidthReducer';
import { isModalOpenReducer } from './isModalOpenReducer';

const rootReducer = combineReducers({
    browserWidthReducer,
    isLoginReducer,
    userInfoReducer,
    isModalOpenReducer,
})

export default rootReducer;
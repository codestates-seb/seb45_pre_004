import { combineReducers } from "redux";
import { isLoginReducer } from "./isLoginReducer";
import { userInfoReducer } from "./userInfoReducer";
import { browserWidthReducer } from './browserWidthReducer';
import { questionListReducer } from './questionListReducer';
import { isModalOpenReducer } from './isModalOpenReducer';

const rootReducer = combineReducers({
    browserWidthReducer,
    isLoginReducer,
    userInfoReducer,
    questionListReducer,
    isModalOpenReducer,
})

export default rootReducer;
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { browserWidthReducer } from './browserWidthReducer';
import { questionListReducer } from './questionListReducer';
import { isModalOpenReducer } from './isModalOpenReducer';

const rootReducer = combineReducers({
    browserWidthReducer,
    authReducer,
    questionListReducer,
    isModalOpenReducer,
})

export default rootReducer;
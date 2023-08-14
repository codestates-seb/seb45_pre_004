import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { browserWidthReducer } from './browserWidthReducer';
import { questionListReducer } from './questionListReducer';

const rootReducer = combineReducers({
    browserWidthReducer,
    authReducer,
    questionListReducer,
})

export default rootReducer;
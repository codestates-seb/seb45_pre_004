import { combineReducers } from "redux";
import { isLoginReducer } from "./isLoginReducer";
import { userInfoReducer } from "./userInfoReducer";
import { browserWidthReducer } from './browserWidthReducer';
import { isModalOpenReducer } from './isModalOpenReducer';
import { locationReducer } from './locationReducer';

const rootReducer = combineReducers({
    browserWidthReducer,
    isLoginReducer,
    userInfoReducer,
    isModalOpenReducer,
    locationReducer,
});

export default rootReducer;
import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { browserWidthReducer } from './browserWidthReducer';

const rootReducer = combineReducers({
    browserWidthReducer,
    authReducer,
})

export default rootReducer;
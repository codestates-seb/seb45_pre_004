import { READ_BROWSER_WIDTH } from "../actions/browserWidthAction";

const initialState = window.innerWidth;

export const browserWidthReducer = (state=initialState, action) => {
    switch(action.type) {
        case READ_BROWSER_WIDTH: 
            return window.innerWidth;
        default: return state;
    }
}
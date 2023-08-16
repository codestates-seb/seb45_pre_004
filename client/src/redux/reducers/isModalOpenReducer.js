import { CLOSE, OPEN } from "../actions/isModalOpenAction";

const initialState = false;

export const isModalOpenReducer = (state=initialState, action) => {
    switch (action.type) {
        case OPEN: 
            return true;
        case CLOSE: 
            return false;
        default: return state;
    }
}
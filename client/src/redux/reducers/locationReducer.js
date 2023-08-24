import { SET_LOCATION } from "../actions/locationAction";

const initialState = '/';

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATION :
             return action.payload;
        default : return state;
    }
}
import { SPLASH_INIT_DATA_START, SPLASH_INIT_DATA_SUCCESS } from "../types";

interface Splash {
    type: string,
}

const initialState = {
    isSuccess: false,
}

export function splashReducer(state = initialState, action: Splash) {
    switch (action.type) {
        case SPLASH_INIT_DATA_START: 
            return {
                ...state,
                isSuccess: false,
            };
        case SPLASH_INIT_DATA_SUCCESS: 
            return {
                ...state,
                isSuccess: true,
            }
        default: 
            return state;
    }
}
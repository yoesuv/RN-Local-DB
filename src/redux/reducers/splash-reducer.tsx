import { SplashActionType, SPLASH_INIT_DATA_SUCCESS } from "../types";

interface SplashState {
    isSuccess: boolean,
}

const initialState: SplashState = {
    isSuccess: false,
}

export function splashReducer(state = initialState, action: SplashActionType): SplashState {
    switch (action.type) {
        case SPLASH_INIT_DATA_SUCCESS: 
            return {
                ...state,
                isSuccess: true,
            }
        default: 
            return state;
    }
}
import { HOME_LOAD_DATA } from "../types";

interface Home {
    type: string,
}

const initialState = {
    users: [],
}

export function homeReducer(state = initialState, action: Home) {
    switch (action.type) {
        case HOME_LOAD_DATA:
            return {
                ...state,
                users: [],
            }
            default: 
            return state;
    }
}
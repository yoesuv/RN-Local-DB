import { UserModel } from "../../models/user-model";
import { HomeActionType, HOME_LOAD_DATA } from "../types";

interface HomeState {
    users: UserModel[],
}

const initialState = {
    users: [],
}

export function homeReducer(state = initialState, action: HomeActionType): HomeState {
    switch (action.type) {
        case HOME_LOAD_DATA:
            return {
                ...state,
                users: action.payload,
            }
        default: 
            return state;
    }
}
import { UserModel } from "../../models/user-model";
import { HomeActionType, HOME_LOAD_DATA, HOME_REMOVE_DATA } from "../types";

interface HomeState {
    isSuccess: boolean,
    users: UserModel[],
}

const initialState: HomeState = {
    isSuccess: false,
    users: [],
}

export function homeReducer(state = initialState, action: HomeActionType): HomeState {
    switch (action.type) {
        case HOME_LOAD_DATA:
            return {
                ...state,
                isSuccess: true,
                users: action.payload,
            }
        case HOME_REMOVE_DATA: {
            return {
                ...state,
                isSuccess: true,
                users: action.payload,
            }
        }
        default: 
            return state;
    }
}
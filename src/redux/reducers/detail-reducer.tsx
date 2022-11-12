import { UserModel } from "../../models/user-model";
import { DetailActionType, DETAIL_LOAD_DATA, DETAIL_LOAD_FAILED } from "../types";

interface DetailState {
    isLoadSuccess: boolean;
    user: UserModel | null;
}

const initialState: DetailState = {
    isLoadSuccess: true,
    user: null,
}

export function detailReducer(state = initialState, action: DetailActionType): DetailState {
    switch (action.type) {
        case DETAIL_LOAD_DATA:
            return {
                ...state,
                isLoadSuccess: true,
                user: action.user,
            }
        case DETAIL_LOAD_FAILED:
            return {
                ...state,
                isLoadSuccess: false,
            }
        default: 
            return state;
    }
}
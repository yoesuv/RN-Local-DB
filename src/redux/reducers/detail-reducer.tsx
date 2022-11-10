import { UserModel } from "../../models/user-model";
import { DetailActionType, DETAIL_LOAD_DATA } from "../types";

interface DetailState {
    user: UserModel | null;
}

const initialState: DetailState = {
    user: null,
}

export function detailReducer(state = initialState, action: DetailActionType): DetailState {
    switch (action.type) {
        case DETAIL_LOAD_DATA:
            return {
                ...state,
                user: null,
            }
        default: 
            return state;
    }
}
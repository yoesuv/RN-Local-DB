import { ActionCreator } from "redux";
import { initRealm } from "../../database/database-realm";
import { UserModel } from "../../models/user-model";
import { HomeActionType, HOME_LOAD_DATA } from "../types";

const homeLoadData: ActionCreator<HomeActionType> = (
    users: UserModel[],
) => {
    return {
        type: HOME_LOAD_DATA,
        payload: users,
    }
}

export function loadFromRealm() {
    return async (dispatch: (arg0: HomeActionType) => void) => {
        const dbRealm = await initRealm();
        const rawUsers = dbRealm.objects<UserModel[]>("users")
        dispatch(homeLoadData(rawUsers));
    }
    
}
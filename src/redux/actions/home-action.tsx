import { ActionCreator } from "redux";
import { TB_USERS } from "../../data/constants";
import { initRealm } from "../../database/database-realm";
import { UserModel } from "../../models/user-model";
import { HomeActionType, HOME_LOAD_DATA, HOME_REMOVE_DATA } from "../types";

const homeLoadData: ActionCreator<HomeActionType> = (
    users: UserModel[],
) => {
    return {
        type: HOME_LOAD_DATA,
        payload: users,
    }
}

const homeRemoveData: ActionCreator<HomeActionType> = (
    users: UserModel[]
) => {
    return {
        type: HOME_REMOVE_DATA,
        payload: users,
    }
}

export function loadFromRealm() {
    return async (dispatch: (arg0: HomeActionType) => void) => {
        const dbRealm = await initRealm();
        const rawUsers = dbRealm.objects<UserModel[]>(TB_USERS);
        dispatch(homeLoadData(rawUsers));
    }
}

export function removeFromRealm(user: UserModel) {
    console.log(`Home Action # remove user ${user.name}`);
    return async (dispatch: (arg0: HomeActionType) => void) => {
        const dbRealm = await initRealm();
        dbRealm.write(() => {
            dbRealm.delete(user)
        });
        const results = dbRealm.objects<UserModel[]>(TB_USERS);
        console.log(`Home Action # remove user length : ${results.length}`);
        dispatch(homeRemoveData(results));
    }
}
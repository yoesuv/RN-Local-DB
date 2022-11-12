import { ActionCreator } from "redux";
import { TB_USERS } from "../../data/constants";
import { initRealm } from "../../database/database-realm";
import { UserModel } from "../../models/user-model";
import { DetailActionType, DETAIL_LOAD_DATA, DETAIL_LOAD_FAILED } from "../types";

const detailLoadData: ActionCreator<DetailActionType> = (
    user: UserModel
) => {
    return {
        type: DETAIL_LOAD_DATA,
        user: user,
    }
}

const detailLoadFailed: ActionCreator<DetailActionType> = () => {
    return {
        type: DETAIL_LOAD_FAILED,
    }
}

export function loadUser(id: number) {
    return async (dispatch: (arg0: DetailActionType) => void) => {
        try {
            const dbRealm = await initRealm();
            const rawUsers = dbRealm.objects<UserModel[]>(TB_USERS);
            const selectedUser = rawUsers.filtered(`id = ${id}`)[0];
            console.log('load user id', JSON.stringify(selectedUser));
            dispatch(detailLoadData(selectedUser));
        } catch (e) {
            dispatch(detailLoadFailed());
        }
    }
}
import { ActionCreator } from "redux";
import { initRealm } from "../../database/database-realm";
import { UserModel } from "../../models/user-model";
import { DetailActionType, DETAIL_LOAD_DATA } from "../types";

const detailLoadData: ActionCreator<DetailActionType> = (
    user: UserModel
) => {
    return {
        type: DETAIL_LOAD_DATA,
        user: user,
    }
}

export function loadUser(id: number) {
    return async (dispatch: (arg0: DetailActionType) => void) => {
        const dbRealm = await initRealm();
        const rawUsers = dbRealm.objects<UserModel[]>("users");
        const selectedUser = rawUsers.filtered(`id = ${id}`);
        detailLoadData(selectedUser);
    }
}
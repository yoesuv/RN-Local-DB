import { ActionCreator } from "redux";
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
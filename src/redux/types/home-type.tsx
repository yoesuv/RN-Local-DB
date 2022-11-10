import { UserModel } from "../../models/user-model";

export const HOME_LOAD_DATA = "HOME_LOAD_DATA";
export const HOME_REMOVE_DATA = "HOME_REMOVE_DATA";

interface homeLoadData {
    type: typeof HOME_LOAD_DATA;
    payload: UserModel[];
}

interface homeRemoveData {
    type: typeof HOME_REMOVE_DATA;
    payload: UserModel[];
}

export type HomeActionType = homeLoadData | homeRemoveData;
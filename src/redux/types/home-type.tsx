import { UserModel } from "../../models/user-model";

export const HOME_LOAD_DATA = "HOME_LOAD_DATA";

interface homeLoadData {
    type: typeof HOME_LOAD_DATA;
    payload: UserModel[];
}

export type HomeActionType = homeLoadData;
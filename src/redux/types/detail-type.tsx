import { UserModel } from "../../models/user-model";

export const DETAIL_LOAD_DATA = "DETAIL_LOAD_DATA";

interface detailLoadData {
    type: typeof DETAIL_LOAD_DATA;
    user: UserModel | null;
}

export type DetailActionType = detailLoadData;
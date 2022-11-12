import { UserModel } from "../../models/user-model";

export const DETAIL_LOAD_DATA = "DETAIL_LOAD_DATA";
export const DETAIL_LOAD_FAILED = "DETAIL_LOAD_FAILED";

interface detailLoadData {
    type: typeof DETAIL_LOAD_DATA;
    user: UserModel | null;
}

interface detailLoadFailed {
    type: typeof DETAIL_LOAD_FAILED;
}

export type DetailActionType = detailLoadData | detailLoadFailed;
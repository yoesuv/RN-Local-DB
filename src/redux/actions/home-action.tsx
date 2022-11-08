import { ActionCreator } from "redux";
import { HomeActionType, HOME_LOAD_DATA } from "../types";

const homeLoadData: ActionCreator<HomeActionType> = () => {
    return {
        type: HOME_LOAD_DATA,
    }
}
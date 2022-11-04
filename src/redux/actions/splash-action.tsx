import { ActionCreator } from 'redux';
import { UserModel } from '../../models/user-model';
import { SplashActionType, SPLASH_INIT_DATA_START, SPLASH_INIT_DATA_SUCCESS } from '../types';

const splashInitDataStart: ActionCreator<SplashActionType> = () => {
    return {
        type: SPLASH_INIT_DATA_START,
    }
}

const splashInitDataSuccess: ActionCreator<SplashActionType> = () => {
    return {
        type: SPLASH_INIT_DATA_SUCCESS,
    }
}

export function insertDatabase(users: UserModel[]) {
    return (dispatch: (arg0: SplashActionType) => void) => {
        dispatch(splashInitDataStart());
    };
}
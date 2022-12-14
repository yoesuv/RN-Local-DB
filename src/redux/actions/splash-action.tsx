import { ActionCreator } from 'redux';
import { TB_USERS } from '../../data/constants';
import { initRealm } from '../../database/database-realm';
import { UserModel } from '../../models/user-model';
import { SplashActionType, SPLASH_INIT_DATA_SUCCESS } from '../types';

const splashInitDataSuccess: ActionCreator<SplashActionType> = () => {
    return {
        type: SPLASH_INIT_DATA_SUCCESS,
    }
}

export function insertDatabase(users: UserModel[]) {
    return async (dispatch: (arg0: SplashActionType) => void) => {
        const dbRealm = await initRealm();
        dbRealm.write(() => {
            dbRealm.deleteAll();
            for (const user of users) {
                console.log(`Splash Action # insert user ${user.name}`);
                dbRealm.create(TB_USERS, user);
            }
        })
        dispatch(splashInitDataSuccess());
    };
}
import { ActionCreator } from 'redux';
import { initRealm } from '../../database/database-realm';
import { UserSchema } from '../../database/user-schema';
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
    return async (dispatch: (arg0: SplashActionType) => void) => {
        const dbRealm = await initRealm();
        dbRealm.write(() => {
            dbRealm.deleteAll();
            for (const user of users) {
                console.log(`Splash Action # insert user ${user.name}`);
                dbRealm.create("users", {
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    website: user.website,
                })
            }
        })
        dispatch(splashInitDataSuccess());
    };
}
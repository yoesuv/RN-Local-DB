import { combineReducers } from 'redux';
import { splashReducer } from './splash-reducer';
import { homeReducer } from './home-reducer';
import { detailReducer } from './detail-reducer';

export const rootReducer = combineReducers({
    splash: splashReducer,
    home: homeReducer,
    detail: detailReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
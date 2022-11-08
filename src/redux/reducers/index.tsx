import { combineReducers } from 'redux';
import { splashReducer } from './splash-reducer';
import { homeReducer } from './home-reducer';

export const rootReducer = combineReducers({
    splash: splashReducer,
    home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
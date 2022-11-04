import { combineReducers } from 'redux';
import { splashReducer } from './splash-reducer';

export const rootReducer = combineReducers({
    splash: splashReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
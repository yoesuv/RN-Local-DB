export const SPLASH_INIT_DATA_START = "SPLASH_INIT_DATA_START";
export const SPLASH_INIT_DATA_SUCCESS = "SPLASH_INIT_DATA_SUCCESS";

interface SplashInitDataStart {
    type: typeof SPLASH_INIT_DATA_START;
}

interface SplashInitDataSuccess {
    type: typeof SPLASH_INIT_DATA_SUCCESS;
}

export type SplashActionType = SplashInitDataStart | SplashInitDataSuccess;
import { User } from '@src/api/types';

import {
    ErrorAction,
    Fetching,
    Success,
    UpdateHistory,
    UpdatePoints
} from './actionCreators';

export type UserReducerState = {
    user?: User;
    loading: boolean;
    error?: Error;
};

export type UserReducerAction =
    | UpdatePoints
    | UpdateHistory
    | Fetching
    | ErrorAction
    | Success;

const userReducer = (
    state: UserReducerState,
    action: UserReducerAction
): UserReducerState => {
    switch (action.type) {
        case 'FETCHING':
            return {
                loading: true
            };
        case 'ERROR':
            return {
                loading: false,
                error: action.payload
            };
        case 'SUCCESS':
            return {
                loading: false,
                user: action.payload
            };
        case 'UPDATE_POINTS':
            return {
                loading: false,
                user: state.user
                    ? {
                          ...state.user,
                          points: action.payload
                      }
                    : undefined
            };
        case 'UPDATE_HISTORY':
            return {
                ...state,
                user: state.user
                    ? {
                          ...state.user,
                          redeemHistory: action.payload
                      }
                    : undefined
            };
    }
};

export default userReducer;

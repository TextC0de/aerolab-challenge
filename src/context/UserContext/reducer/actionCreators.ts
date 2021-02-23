import { RedeemHistory, User } from '@src/api/types';

export type UpdatePoints = { type: 'UPDATE_POINTS'; payload: number };
export const updatePoints = (payload: number): UpdatePoints => ({
    type: 'UPDATE_POINTS',
    payload
});

export type UpdateHistory = {
    type: 'UPDATE_HISTORY';
    payload: RedeemHistory;
};
export const updateHistory = (payload: RedeemHistory): UpdateHistory => ({
    type: 'UPDATE_HISTORY',
    payload
});

export type Fetching = { type: 'FETCHING' };
export const fetching = (): Fetching => ({ type: 'FETCHING' });

export type Success = { type: 'SUCCESS'; payload: User };
export const success = (payload: User): Success => ({
    type: 'SUCCESS',
    payload
});

export type ErrorAction = { type: 'ERROR'; payload: Error };
export const error = (payload: Error): ErrorAction => ({
    type: 'ERROR',
    payload
});

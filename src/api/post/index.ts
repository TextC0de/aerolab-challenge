import { AxiosResponse } from 'axios';

import { baseAxios } from '../constants';

type RedeemProduct = { message: string };
export const redeemProduct = (
    productId: string
): Promise<AxiosResponse<RedeemProduct>> =>
    baseAxios.post<RedeemProduct>('/redeem', { productId });

type AddMorePoints = { message: string };
export const addMorePoints = (
    amount: 1000 | 5000 | 7500
): Promise<AxiosResponse<AddMorePoints>> =>
    baseAxios.post<AddMorePoints>('/user/points', { amount });

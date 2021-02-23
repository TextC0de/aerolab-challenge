import { AxiosResponse } from 'axios';

import { baseAxios } from '../constants';
import { Product, RedeemHistory, User } from '../types';

type GetMyUser = User;
export const getMyUser = (): Promise<AxiosResponse<GetMyUser>> =>
    baseAxios.get<GetMyUser>('/user/me');

type GetProducts = Product[];
export const getProducts = (): Promise<AxiosResponse<GetProducts>> =>
    baseAxios.get<GetProducts>('/products');

type GetUserHistory = RedeemHistory;
export const getUserHistory = (): Promise<AxiosResponse<GetUserHistory>> =>
    baseAxios.get<GetUserHistory>('/user/history');

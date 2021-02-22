import { AxiosResponse } from 'axios';

import { baseAxios } from '../constants';
import { Product, User } from '../types';

type GetMyUser = User;

export const getMyUser = (): Promise<AxiosResponse<GetMyUser>> =>
    baseAxios.get<GetMyUser>('/user/me');

type GetProducts = Product[];
export const getProducts = (): Promise<AxiosResponse<GetProducts>> =>
    baseAxios.get<GetProducts>('/products');

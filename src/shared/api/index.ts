import { AxiosError, AxiosResponse } from 'axios';


export * from './user';

export type Res<T = any> = AxiosResponse<T> | AxiosError;
import { AxiosError, AxiosResponse } from 'axios';


export * from './user';
export * from './post';

export type Res<T = any> = AxiosResponse<T> | AxiosError;
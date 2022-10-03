import { AxiosError } from 'axios';

import  Axios  from '../axios' ;

const ENDPOINT = '/user'

export const getUsers = async (): Promise<TUser[] | AxiosError> => {
  try {
    return await Axios.get(`${ENDPOINT}`).then(
      ({ data }) => data
    );
  } catch (err) {
    return err;
  }
};


export const getUser = async (id:number | string): Promise<TUser[] | AxiosError> => {
    try {
      return await Axios.get(`${ENDPOINT}/${id}`).then(
        ({ data }) => data
      );
    } catch (err) {
      return err;
    }
  };

/* Types */
type TUser = {
  uid: string;
  name: string;
  email: string;
  roles: { code: string; name: string }[];
};